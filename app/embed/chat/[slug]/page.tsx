import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ChatwootEmbedClient } from "@/components/integrations/chatwoot-embed-client";
import {
  chatwootEmbeddableChannels,
  getChatwootChannel,
} from "@/lib/chatwoot-channels";

export function generateStaticParams() {
  return chatwootEmbeddableChannels.map((c) => ({ slug: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ch = getChatwootChannel(slug);
  return {
    title: ch ? `Chat — ${ch.label}` : "Chat",
    robots: { index: false, follow: false },
  };
}

export default async function EmbedChatPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ch = getChatwootChannel(slug);
  if (!ch?.websiteToken || ch.wip) {
    notFound();
  }

  return (
    <div className="fixed inset-0 h-dvh w-full overflow-hidden bg-background">
      <ChatwootEmbedClient
        websiteToken={ch.websiteToken}
        launcherTitle={ch.launcherTitle ?? ch.label}
      />
    </div>
  );
}

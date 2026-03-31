"use client";

import { CHATWOOT_BASE_URL } from "@/lib/chatwoot-channels";
import { useEffect } from "react";

type Props = {
  websiteToken: string;
  launcherTitle: string;
};

export function ChatwootEmbedClient({ websiteToken, launcherTitle }: Props) {
  useEffect(() => {
    window.chatwootSettings = {
      position: "right",
      type: "expanded_bubble",
      launcherTitle,
      hideMessageBubble: true,
    };

    let fallbackId: NodeJS.Timeout | undefined;

    const openWidget = () => {
      window.$chatwoot?.toggle("open");
      if (fallbackId !== undefined) {
        clearTimeout(fallbackId);
        fallbackId = undefined;
      }
    };

    window.addEventListener("chatwoot:ready", openWidget);

    const script = document.createElement("script");
    script.async = true;
    script.src = `${CHATWOOT_BASE_URL}/packs/js/sdk.js`;

    const onLoad = () => {
      window.chatwootSDK?.run({
        websiteToken,
        baseUrl: CHATWOOT_BASE_URL,
      });
      fallbackId = setTimeout(() => {
        fallbackId = undefined;
        window.$chatwoot?.toggle("open");
      }, 1600);
    };

    script.addEventListener("load", onLoad);
    document.body.appendChild(script);

    return () => {
      window.removeEventListener("chatwoot:ready", openWidget);
      if (fallbackId !== undefined) {
        clearTimeout(fallbackId);
      }
      script.removeEventListener("load", onLoad);
      script.remove();
    };
  }, [websiteToken, launcherTitle]);

  return (
    <div
      className="h-full min-h-[520px] w-full bg-background"
      aria-hidden
    />
  );
}

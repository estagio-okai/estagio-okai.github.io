import { MessageCircle } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function ChatDemoHero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-background via-muted/80 to-background dark:via-muted/40">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-green/15 blur-3xl motion-safe:animate-pulse"
        aria-hidden
      />
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="max-w-2xl animate-fade-up space-y-6">
          <span className="inline-flex w-fit items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            Dev / testes
          </span>
          <h1 className="font-heading">
            Teste o chat da OK IA nesta página
          </h1>
          <p className="text-base text-muted-foreground sm:text-lg">
            O widget Chatwoot está configurado para abrir à{" "}
            <strong className="font-medium text-foreground">direita</strong>,
            em modo{" "}
            <strong className="font-medium text-foreground">
              expanded bubble
            </strong>
            . Use esta demo para validar fluxos, mensagens e aparência antes de
            publicar no site principal.
          </p>
          <p className="text-sm text-muted-foreground sm:text-base">
            <strong className="font-medium text-foreground">
              Botões no canto inferior direito:
            </strong>{" "}
            cada canal abre um painel com iframe próprio. Só um painel fica
            ativo — ao trocar de canal, o anterior some, sem dois chats
            abertos ao mesmo tempo.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="shadow-md">
              <a href="#como-funciona">Como funciona</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/testes-chat/">Página de testes</Link>
            </Button>
          </div>
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <MessageCircle className="size-4 text-primary" aria-hidden />
            Um clique no canal abre o painel e o Chatwoot já entra na conversa
            (sem segundo clique na bolha). Clique de novo no mesmo botão para
            fechar.
          </p>
        </div>
      </div>
    </section>
  );
}

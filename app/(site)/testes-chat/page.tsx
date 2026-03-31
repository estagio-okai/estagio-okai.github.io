import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Testes do chat",
};

const checks = [
  "Botões dos canais (SGP Suporte N1, Comercial, Hubsoft Suporte N1) no canto inferior direito",
  "Abrir um canal mostra iframe em /embed/chat/<id>/ com o token correspondente",
  "Abrir outro canal substitui o iframe — apenas um chat visível",
  "Clique repetido no mesmo botão fecha o painel",
  "SDK carregado de https://chat.okia.dev dentro de cada iframe",
];

export default function TestesChatPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <div className="mb-8 space-y-3 animate-fade-up">
        <h1 className="font-heading text-3xl font-bold sm:text-4xl">
          Checklist de testes do chat
        </h1>
        <p className="text-base text-muted-foreground">
          Use esta página como referência rápida enquanto valida o widget
          Chatwoot no ambiente de desenvolvimento.
        </p>
      </div>
      <Card className="mb-8 border-border/80">
        <CardHeader>
          <CardTitle>Dock + iframes</CardTitle>
          <CardDescription>
            Canais e tokens em{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs">
              lib/chatwoot-channels.ts
            </code>
            . Adicione linhas quando tiver os outros tokens.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>
            <span className="font-medium text-foreground">Rotas embed:</span>{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs">
              /embed/chat/suporte-n1/
            </code>
            ,{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs">
              /embed/chat/comercial/
            </code>
            ,{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs">
              /embed/chat/hubsoft-suporte-n1/
            </code>
          </p>
          <p>
            <span className="font-medium text-foreground">Base URL:</span>{" "}
            https://chat.okia.dev
          </p>
          <p>
            <span className="font-medium text-foreground">Tipo:</span>{" "}
            expanded_bubble · <span className="font-medium text-foreground">
              Posição:
            </span>{" "}
            direita (right)
          </p>
        </CardContent>
      </Card>
      <ul className="space-y-3 text-sm">
        {checks.map((item) => (
          <li
            key={item}
            className="flex gap-3 rounded-lg border border-border bg-card px-4 py-3 transition-colors duration-200 hover:bg-muted/40"
          >
            <span
              className="mt-0.5 size-2 shrink-0 rounded-full bg-primary"
              aria-hidden
            />
            <span className="text-foreground">{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-10 flex flex-wrap gap-3">
        <Button asChild>
          <Link href="/">Voltar ao início</Link>
        </Button>
        <Button asChild variant="outline">
          <a
            href="https://okinteligenciaartificial.com.br/manual-marca/"
            target="_blank"
            rel="noreferrer"
          >
            Manual da marca
          </a>
        </Button>
      </div>
    </div>
  );
}

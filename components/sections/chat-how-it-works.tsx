import { CheckCircle2 } from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const steps = [
  {
    title: "Escolha o canal",
    body: "Use o botão do canal desejado (Suporte N1, Comercial, …) no canto inferior direito. O painel abre com o widget daquele token.",
  },
  {
    title: "Envie mensagens de teste",
    body: "Simule dúvidas de clientes, anexos e respostas rápidas para validar o atendimento.",
  },
  {
    title: "Um chat por vez",
    body: "Ao mudar de canal, o iframe é trocado — não há duas instâncias do SDK na página principal. Clique outra vez no mesmo botão para fechar o painel.",
  },
];

export function ChatHowItWorks() {
  return (
    <section
      id="como-funciona"
      className="mx-auto max-w-5xl scroll-mt-24 px-4 py-16 sm:px-6"
    >
      <div className="mb-10 max-w-2xl space-y-3">
        <h2>Como usar esta demo</h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          Fluxo sugerido para equipes de desenvolvimento e conteúdo testarem o
          canal antes do go-live.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step, i) => (
          <Card
            key={step.title}
            className="border-border/80 transition-shadow duration-300 hover:shadow-md"
          >
            <CardHeader>
              <div className="mb-2 flex items-center gap-2 text-primary">
                <CheckCircle2 className="size-5 shrink-0" aria-hidden />
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Passo {i + 1}
                </span>
              </div>
              <CardTitle className="text-lg">{step.title}</CardTitle>
              <CardDescription>{step.body}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}

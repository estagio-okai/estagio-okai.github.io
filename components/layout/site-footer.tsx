import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/70 dark:bg-muted/30">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-muted-foreground">
          Ambiente de demonstração para o widget Chatwoot (dev / testes).
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <Link
            className="text-primary underline-offset-4 transition-colors duration-200 hover:underline"
            href="https://okinteligenciaartificial.com.br/manual-marca/"
            target="_blank"
            rel="noreferrer"
          >
            Manual da marca
          </Link>
          <Link
            className="text-primary underline-offset-4 transition-colors duration-200 hover:underline"
            href="https://chat.okia.dev"
            target="_blank"
            rel="noreferrer"
          >
            Chat OKIA
          </Link>
        </div>
      </div>
    </footer>
  );
}

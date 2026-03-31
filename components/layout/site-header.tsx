import Link from "next/link";

import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/layout/theme-toggle";

const links = [
  { href: "/", label: "Início" },
  { href: "/testes-chat", label: "Testes do chat" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="font-heading text-lg font-bold tracking-tight text-foreground transition-opacity duration-200 hover:opacity-80"
        >
          OK IA
          <span className="ml-2 text-sm font-medium text-muted-foreground">
            demo chat
          </span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-3">
          <nav
            className="flex items-center gap-1 sm:gap-2"
            aria-label="Principal"
          >
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200",
                  "hover:bg-muted hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

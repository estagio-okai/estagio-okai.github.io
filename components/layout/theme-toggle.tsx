"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      className="shrink-0 border-border bg-background/80 backdrop-blur-sm"
      aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
      disabled={!mounted}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {mounted ? (
        isDark ? (
          <Sun className="size-[1.125rem] text-primary" aria-hidden />
        ) : (
          <Moon className="size-[1.125rem] text-foreground" aria-hidden />
        )
      ) : (
        <Moon className="size-[1.125rem] opacity-50" aria-hidden />
      )}
    </Button>
  );
}

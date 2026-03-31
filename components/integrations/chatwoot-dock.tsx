"use client";

import { ChevronDown, MessageCircle, X } from "lucide-react";
import { useCallback, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  chatwootChannelGroups,
  chatwootChannels,
  chatwootStandaloneChannels,
} from "@/lib/chatwoot-channels";
import { cn } from "@/lib/utils";

export function ChatwootDock() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const selectChannel = useCallback((id: string) => {
    setOpenSlug((current) => {
      if (current === id) {
        return null;
      }
      return id;
    });
  }, []);

  const closePanel = useCallback(() => {
    setOpenSlug(null);
  }, []);

  const active = openSlug
    ? chatwootChannels.find((c) => c.id === openSlug)
    : null;

  const isChannelActive = (id: string) => openSlug === id;

  const isGroupActive = (groupId: string) =>
    chatwootChannelGroups
      .find((g) => g.id === groupId)
      ?.channels.some((c) => c.id === openSlug);

  return (
    <div
      className="pointer-events-none fixed bottom-4 right-4 z-[100] flex max-w-[calc(100vw-2rem)] flex-col items-end gap-3 sm:bottom-6 sm:right-6"
      aria-label="Canais de chat"
    >
      {openSlug && active && (
        <div
          className="pointer-events-auto flex max-h-[min(780px,88vh)] w-[min(420px,calc(100vw-2rem))] flex-col overflow-hidden rounded-xl border border-border bg-card shadow-lg"
          role="dialog"
          aria-label={`Chat ${active.label}`}
        >
          <div className="flex items-center justify-between gap-2 border-b border-border bg-muted/50 px-3 py-2">
            <span className="truncate text-sm font-semibold text-foreground">
              {active.label}
            </span>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="size-8 shrink-0"
              onClick={closePanel}
              aria-label="Fechar chat"
            >
              <X className="size-4" aria-hidden />
            </Button>
          </div>
          <iframe
            key={openSlug}
            title={active.label}
            src={`/embed/chat/${openSlug}/`}
            className="min-h-[min(620px,78vh)] flex-1 w-full border-0 bg-background"
          />
        </div>
      )}

      <div className="pointer-events-auto flex flex-col items-end gap-2">
        {chatwootChannelGroups.map((group) => (
          <DropdownMenu key={group.id}>
            <DropdownMenuTrigger asChild>
              <Button
                type="button"
                size="sm"
                variant={isGroupActive(group.id) ? "default" : "secondary"}
                className={cn(
                  "max-w-[min(280px,calc(100vw-3rem))] justify-between gap-2 shadow-md",
                  isGroupActive(group.id) &&
                    "ring-2 ring-ring ring-offset-2 ring-offset-background",
                )}
              >
                <span className="flex items-center gap-2 truncate">
                  <MessageCircle className="size-4 shrink-0" aria-hidden />
                  {group.label}
                </span>
                <ChevronDown className="size-4 shrink-0 opacity-70" aria-hidden />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" side="top" sideOffset={8}>
              {group.channels.map((ch) => (
                <DropdownMenuItem
                  key={ch.id}
                  className={cn(
                    "cursor-pointer",
                    isChannelActive(ch.id) && "bg-accent/50",
                  )}
                  onClick={() => selectChannel(ch.id)}
                >
                  {ch.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ))}

        {chatwootStandaloneChannels.map((ch) => (
          <Button
            key={ch.id}
            type="button"
            size="sm"
            variant={isChannelActive(ch.id) ? "default" : "secondary"}
            className={cn(
              "max-w-[min(280px,calc(100vw-3rem))] justify-start gap-2 shadow-md",
              isChannelActive(ch.id) &&
                "ring-2 ring-ring ring-offset-2 ring-offset-background",
            )}
            onClick={() => selectChannel(ch.id)}
          >
            <MessageCircle className="size-4 shrink-0" aria-hidden />
            <span className="truncate">{ch.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}

export {};

declare global {
  interface Window {
    chatwootSettings?: Record<string, unknown>;
    chatwootSDK?: {
      run: (opts: { websiteToken: string; baseUrl: string }) => void;
    };
    $chatwoot?: {
      toggle: (state?: "open" | "close") => void;
      reset?: () => void;
      toggleBubbleVisibility?: (visibility: "show" | "hide") => void;
    };
  }
}

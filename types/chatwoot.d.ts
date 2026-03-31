export {};

declare global {
  interface Window {
    chatwootSettings?: Record<string, unknown>;
    chatwootSDK?: {
      run: (opts: { websiteToken: string; baseUrl: string }) => void;
    };
  }
}

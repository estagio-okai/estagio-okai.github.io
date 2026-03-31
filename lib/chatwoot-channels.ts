export const CHATWOOT_BASE_URL = "https://chat.okia.dev";

export type ChatwootChannel = {
  id: string;
  label: string;
  websiteToken: string;
};

/** Canais com token próprio; adicione entradas para os outros 4 quando tiver os tokens. */
export const chatwootChannels: ChatwootChannel[] = [
  {
    id: "suporte-n1",
    label: "SGP - Suporte N1",
    websiteToken: "WegtGJo4QLoUC225snJsXvqV",
  },
  {
    id: "comercial",
    label: "SGP - Comercial",
    websiteToken: "9haM6Yg4wncmXs5oxP3ouGxT",
  },
  {
    id: "hubsoft-suporte-n1",
    label: "Hubsoft - Suporte N1",
    websiteToken: "AhY2G2nwUuvFB36N9cck2ijy",
  },
];

export function getChatwootChannel(
  slug: string,
): ChatwootChannel | undefined {
  return chatwootChannels.find((c) => c.id === slug);
}

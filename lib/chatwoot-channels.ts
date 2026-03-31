export const CHATWOOT_BASE_URL = "https://chat.okia.dev";

export type ChatwootChannel = {
  id: string;
  label: string;
  websiteToken: string;
};

export type ChatwootChannelGroup = {
  id: string;
  label: string;
  channels: ChatwootChannel[];
};

/** Grupos no dock (dropdown). */
export const chatwootChannelGroups: ChatwootChannelGroup[] = [
  {
    id: "sgp",
    label: "SGP",
    channels: [
      {
        id: "suporte-n1",
        label: "Suporte N1",
        websiteToken: "WegtGJo4QLoUC225snJsXvqV",
      },
      {
        id: "comercial",
        label: "Comercial",
        websiteToken: "9haM6Yg4wncmXs5oxP3ouGxT",
      },
    ],
  },
];

/** Botões diretos (sem submenu). */
export const chatwootStandaloneChannels: ChatwootChannel[] = [
  {
    id: "hubsoft-suporte-n1",
    label: "Hubsoft - Suporte N1",
    websiteToken: "AhY2G2nwUuvFB36N9cck2ijy",
  },
];

/** Lista plana para rotas embed e busca por slug. */
export const chatwootChannels: ChatwootChannel[] = [
  ...chatwootChannelGroups.flatMap((g) => g.channels),
  ...chatwootStandaloneChannels,
];

export function getChatwootChannel(
  slug: string,
): ChatwootChannel | undefined {
  return chatwootChannels.find((c) => c.id === slug);
}

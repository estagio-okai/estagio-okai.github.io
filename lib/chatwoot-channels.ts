export const CHATWOOT_BASE_URL = "https://chat.okia.dev";

/** Valor de `chatwootSettings.type` no SDK. */
export type ChatwootWidgetType = "standard" | "expanded_bubble";

export type ChatwootChannel = {
  id: string;
  /** Texto no item do dropdown */
  label: string;
  /** Título do launcher no widget; se omitido, usa `label`. */
  launcherTitle?: string;
  /** Instância Chatwoot; padrão CHATWOOT_BASE_URL. */
  baseUrl?: string;
  /** Modo do bubble; padrão expanded_bubble. */
  widgetType?: ChatwootWidgetType;
  websiteToken?: string;
  /** Sem Chatwoot: o painel mostra aviso WIP. */
  wip?: boolean;
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
  {
    id: "hubsoft",
    label: "Hubsoft",
    channels: [
      {
        id: "hubsoft-suporte-n1",
        label: "Suporte N1",
        launcherTitle: "Hubsoft - Suporte N1",
        websiteToken: "AhY2G2nwUuvFB36N9cck2ijy",
      },
      {
        id: "hubsoft-comercial",
        label: "Comercial",
        launcherTitle: "Fale conosco no chat",
        baseUrl: "https://chat.okia.ai",
        widgetType: "standard",
        websiteToken: "L97PhejjMhbke14GLczyBL8c",
      },
      {
        id: "hubsoft-multi-agente",
        label: "Multi-Agente",
        launcherTitle: "Hubsoft - Multi-Agente",
        websiteToken: "X7GpazDQycbykRKQVi7ah2M9",
      },
    ],
  },
  {
    id: "ixc",
    label: "IXC",
    channels: [
      {
        id: "ixc-suporte-n1",
        label: "Suporte N1",
        launcherTitle: "IXC - Suporte N1",
        websiteToken: "dHHqFpg1FHkd5ZicK1KkB4xs",
      },
      {
        id: "ixc-comercial",
        label: "Comercial",
        wip: true,
      },
    ],
  },
];

/** Botões diretos (sem submenu); vazio se todos os canais estiverem em grupos. */
export const chatwootStandaloneChannels: ChatwootChannel[] = [];

/** Lista plana para rotas embed e busca por slug. */
export const chatwootChannels: ChatwootChannel[] = [
  ...chatwootChannelGroups.flatMap((g) => g.channels),
  ...chatwootStandaloneChannels,
];

/** Canais que geram página embed estática com Chatwoot. */
export const chatwootEmbeddableChannels: ChatwootChannel[] =
  chatwootChannels.filter((c) => !c.wip && Boolean(c.websiteToken));

export function getChatwootChannel(
  slug: string,
): ChatwootChannel | undefined {
  return chatwootChannels.find((c) => c.id === slug);
}

/** Título do painel do dock: "Grupo — opção". */
export function channelPanelTitle(ch: ChatwootChannel): string {
  const group = chatwootChannelGroups.find((g) =>
    g.channels.some((c) => c.id === ch.id),
  );
  if (group) {
    return `${group.label} — ${ch.label}`;
  }
  return ch.label;
}

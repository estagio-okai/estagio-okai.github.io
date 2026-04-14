"use client";

import { CHATWOOT_TEST_AGENT_WIDGET } from "@/lib/chatwoot-channels";
import { useEffect } from "react";

/**
 * Chatwoot no documento principal: bolha padrão no canto inferior esquerdo
 * (independente do dock de iframes à direita).
 */
export function ChatwootTestAgentBubble() {
  useEffect(() => {
    const { baseUrl, websiteToken, launcherTitle, widgetType, position } =
      CHATWOOT_TEST_AGENT_WIDGET;

    window.chatwootSettings = {
      position,
      type: widgetType,
      launcherTitle,
    };

    const script = document.createElement("script");
    script.async = true;
    script.src = `${baseUrl}/packs/js/sdk.js`;

    const onLoad = () => {
      window.chatwootSDK?.run({ websiteToken, baseUrl });
    };

    script.addEventListener("load", onLoad);
    document.body.appendChild(script);

    return () => {
      script.removeEventListener("load", onLoad);
      script.remove();
      document.querySelectorAll(".woot--bubble-holder").forEach((el) => {
        el.remove();
      });
      document.querySelectorAll(".woot-widget-holder").forEach((el) => {
        el.remove();
      });
      document.getElementById("cw-widget")?.remove();
      delete window.$chatwoot;
      delete window.chatwootSDK;
    };
  }, []);

  return null;
}

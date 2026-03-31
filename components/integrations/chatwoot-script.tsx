import Script from "next/script";

const CHATWOOT_BOOT = `
window.chatwootSettings = {"position":"right","type":"expanded_bubble","launcherTitle":"SGP - Suporte N1"};
(function(d,t) {
  var BASE_URL="https://chat.okia.dev";
  var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
  g.src=BASE_URL+"/packs/js/sdk.js";
  g.async = true;
  s.parentNode.insertBefore(g,s);
  g.onload=function(){
    window.chatwootSDK.run({
      websiteToken: 'WegtGJo4QLoUC225snJsXvqV',
      baseUrl: BASE_URL
    })
  }
})(document,"script");
`.trim();

export function ChatwootScript() {
  return (
    <Script
      id="chatwoot-bootstrap"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: CHATWOOT_BOOT }}
    />
  );
}

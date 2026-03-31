import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

import { ChatwootScript } from "@/components/integrations/chatwoot-script";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "OK IA — Demo do chat (dev / testes)",
    template: "%s · OK IA demo",
  },
  description:
    "Página de demonstração do widget Chatwoot para testes e desenvolvimento.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable}`}
    >
      <body className="min-h-dvh font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ChatwootScript />
        </ThemeProvider>
      </body>
    </html>
  );
}

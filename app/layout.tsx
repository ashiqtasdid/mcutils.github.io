import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://minecraftutilities.github.io/"),
  title: "Home - Minecraft Utilities",
  description:
    "A feature-rich bot for Minecraft tools & utilities.  Easily, get real-time information about a Minecraft Server, Player Skin, UUID & much more! ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Minecraft Utilities",
    alternateName: "mc utils",
    url: "https://minecraftutilities.github.io",
    logo: "https://cdn.discordapp.com/avatars/810192936472936480/de91eae74d57aa015b0d2226af17ff9d.webp?size=256",
    sameAs: [
      "https://twitter.com/mc_utilities",
      "https://github.com/minecraftutilities",
      "https://minecraftutilities.github.io",
    ],
  };

  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={GeistSans.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </html>
  );
}

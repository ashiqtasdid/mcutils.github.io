import Invite from "@/components/local/InviteCMP";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invite | Minecraft Utilities",
  description:
    "Invite Minecraft Utilities to your server. Get started with the bot today. Enhance your Minecraft experience.",
  keywords: [
    "Minecraft Utilities",
    "Invite",
    "Minecraft",
    "Discord",
    "Bot",
    "Company",
    "2024",
    "Hypixel",
    "Discord",
    "Server",
    "Support",
    "Developers",
    "Partners",
  ],
};

const page = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Website",
    name: "EULA - Minecraft Utilities",
    url: "https://minecraftutilities.github.io/EULA",
  };
  return (
    <div>
      <Invite />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
};

export default page;

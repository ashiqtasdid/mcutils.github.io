import Documentation from "@/components/local/DocumentationCMP";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation | Minecraft Utilities",
  description:
    "The documentation for Minecraft Utilities Discord Bot. Learn how to use the bot and its features. Get started with the bot today.",
  keywords: [
    "Minecraft Utilities",
    "Documentation",
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
  return (
    <div>
      <Documentation />
    </div>
  );
};

export default page;

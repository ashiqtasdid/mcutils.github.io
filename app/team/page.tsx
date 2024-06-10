import FooterMain from "@/components/local/FooterMain";
import Nav from "@/components/local/Nav";
import React from "react";
import { Metadata } from "next";
import TeamCmp from "@/components/local/TeamCmp";

export const metadata: Metadata = {
  metadataBase: new URL("https://minecraftutilities.github.io/team"),
  title: "Meet our Team",
  description:
    "Meet the people who made it possible. Our developers and partners are working diligently to improve the bot. We at Minecraft Utilitites are a team of dedicated members to make your experience better.",
  keywords: [
    "Minecraft Utilities",
    "Team",
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

const team = () => {
  return (
    <div>
      <Nav />
      <TeamCmp />
      <hr className="my-4 dark:hidden" />
      <FooterMain />
    </div>
  );
};

export default team;

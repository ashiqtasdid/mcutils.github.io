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
  return (
    <div>
      <Invite />
    </div>
  );
};

export default page;

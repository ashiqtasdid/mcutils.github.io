import FooterMain from "@/components/local/FooterMain";
import Nav from "@/components/local/Nav";
import React from "react";
import AshiqTasdidCMP from "@/components/local/ashiqtasdidCMP";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Md. Ashiquzzaman Khan - Lead Developer",
  description:
    "Md. Ashiquzzaman Khan is the lead developer of Minecraft Utilities. He is a full-stack web developer with a passion for web technologies. With over 5 years of experience, he specializes in developing web applications using React, Node.js, Express.js, and MongoDB.",
  keywords: [
    " Md. Ashiquzzaman Khan",
    "Lead Developer",
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
    "Ashiq",
    "Ashiq Tasdid",
  ],
};

const page = () => {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: "Md. Ashiquzzaman Khan",
    url: "https://ashiqtasdid.github.io",
    image:
      "https://cdn.discordapp.com/avatars/681552494064697350/e42f7681ed451c163b89a269aaba7877.webp?size=256",
    sameAs: [
      "https://facebook.com/ashiq.tasdid.1",
      "https://twitter.com/theashiqtasdid",
      "https://github.com/ashiqtasdid",
      "https://youtube.com/@ashiqtasdid",
      "https://ashiqtasdid.github.io",
    ],
    jobTitle: "CEO,",
    worksFor: {
      "@type": "Organization",
      name: "Spectex",
    },
  };

  return (
    <div>
      <Nav />
      <AshiqTasdidCMP />
      <hr className="my-4 dark:hidden" />
      <FooterMain />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
};

export default page;

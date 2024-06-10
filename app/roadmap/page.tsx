import FooterMain from "@/components/local/FooterMain";
import Nav from "@/components/local/Nav";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roadmap | Minecraft Utilities",
  description:
    "Our roadmap for the future of Minecraft Utilities. In 2024, we plan to implement AI features, build a community, and more.",
  keywords: [
    "Minecraft Utilities",
    "Roadmap",
    "Minecraft",
    "AI",
    "Community",
    "2024",
    "Hypixel",
    "Discord",
    "Server",
  ],
};

const roadmap = () => {
  return (
    <div>
      <Nav />
      <div className="py-32 dark:text-white">
        <div className="flex justify-center items-center text-center align-middle">
          <div className="text-3xl dark:text-white font-bold">
            <h1>Roadmap</h1>
          </div>
        </div>
        <div className="mx-10">
          <div className="pt-10 prose">
            <h1 className="font-bold dark:text-white text-2xl">
              Top Objectives for 2024:
            </h1>
            <ul className="dark:text-white">
              <li>Get used 10K Servers</li>
              <li>Implement TS</li>
              <li>Implement AI Features</li>
              <li>Advanced Hypixel Integration</li>
              <li>Build a Community</li>
              <li>Community Events</li>
              <li>Make the Discord server more prominent</li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="my-4 dark:hidden" />
      <FooterMain />
    </div>
  );
};

export default roadmap;

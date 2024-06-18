import FooterMain from "@/components/local/FooterMain";
import Nav from "@/components/local/Nav";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Minecraft Utilities",
  description:
    "The terms of service for Minecraft Utilities Discord Bot. By using the bot, you agree to these terms. Learn more.",
  keywords: [
    "Minecraft Utilities",
    "Terms of Service",
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

const terms = () => {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Website",
    name: "Terms & Conditions - Minecraft Utilities",
    url: "https://minecraftutilities.github.io/terms",
  };
  return (
    <div>
      <Nav />
      <div className="tos-container prose prose-headings:text-black dark:prose-headings:text-white dark:prose-a:text-white dark:prose-p:text-white dark:prose-li:text-white dark:prose-strong:text-white mx-auto py-32">
        <h2>Terms of Service (TOS) for Minecraft Utilities Discord Bot</h2>

        <p>
          These Terms of Service (&quot;TOS&quot;) govern your use of the
          Minecraft Utilities Discord Bot (&quot;Bot&quot;), a service provided
          by Minecraft Utilities (&quot;we&quot; or &quot;us&quot;). By adding
          the Bot to your Discord server, you (&quot;you&quot; or
          &quot;User&quot;) agree to be bound by these TOS. If you disagree with
          any part of these TOS, then you may not add or use the Bot on your
          Discord server.
        </p>

        <h3>2. User Accounts</h3>

        <p>
          The Bot operates within the Discord platform. You are responsible for
          maintaining the security of your Discord account and complying with
          Discord&apos;s Terms of Service.
        </p>

        <h3>3. Functionality</h3>

        <p>
          The Bot provides various functionalities designed to enhance your
          Minecraft experience within a Discord server. These functionalities
          may include (but are not limited to):
        </p>

        <ul>
          <li>Moderation tools</li>
          <li>Utility commands</li>
          <li>Information resources</li>
        </ul>

        <p>
          The specific features and functionalities available may change over
          time. We reserve the right to modify, add, or remove functionalities
          at our discretion.
        </p>

        <h3>4. Acceptable Use</h3>

        <p>
          4.1 You agree to use the Bot in a lawful and responsible manner that
          does not violate Discord&apos;s Terms of Service or any applicable
          laws.
        </p>

        <p>
          4.2 You agree not to use the Bot for any of the following purposes:
        </p>

        <ul>
          <li>To harass, bully, or threaten other users.</li>
          <li>To promote hate speech or discrimination.</li>
          <li>To distribute illegal content.</li>
          <li>To spam or flood the Discord server with messages.</li>
          <li>
            To attempt to gain unauthorized access to other users accounts or
            the Bot itself.
          </li>
          <li>
            To interfere with the normal operation of the Bot or the Discord
            server.
          </li>
        </ul>

        <p>
          4.3 You are responsible for the actions of your users who interact
          with the Bot on your Discord server. You agree to take appropriate
          action against any user who violates these TOS.
        </p>

        <h3>5. Disclaimers</h3>

        <p>
          5.1 THE BOT IS PROVIDED &quot;AS IS&quot; AND WITHOUT WARRANTY OF ANY
          KIND, EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT
          NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
          PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
        </p>

        <p>
          5.2 WE DO NOT WARRANT THAT THE BOT WILL BE UNINTERRUPTED, SECURE, OR
          ERROR-FREE. WE DO NOT WARRANT THAT THE RESULTS THAT MAY BE OBTAINED
          FROM THE USE OF THE BOT WILL BE ACCURATE OR RELIABLE.
        </p>

        <p>5.3 YOU USE THE BOT AT YOUR OWN RISK.</p>

        <p className="text-center font-bold mt-4">
          **By adding the Minecraft Utilities Discord Bot to your server, you
          acknowledge that you have read, understood, and agree to be bound by
          these TOS.**
        </p>
      </div>
      <FooterMain />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
};

export default terms;

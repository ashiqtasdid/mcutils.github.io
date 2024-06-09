"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Ashiq Tasdid",
    position: "Lead Developer",
    description:
      "I'm the one who is reponsible for the architecture and development of the bot. Follow me on Twitter for updates. ",
    avatarUrl:
      "https://cdn.discordapp.com/avatars/681552494064697350/e42f7681ed451c163b89a269aaba7877.webp?size=256",
    social: {
      twitter: "https://twitter.com/theashiqtasdid",
      linkedin: "https://linkedin.com/in/ashiqtasdid",
      github: "https://github.com/ashiqtasdid",
    },
  },
  {
    name: "Stying",
    position: "Bot Tester",
    description:
      "I am the one who is responsible for testing the bot. I make sure that the bot is working as expected.",
    avatarUrl:
      "https://cdn.discordapp.com/avatars/418425400625070090/7cb22469840bb8512b7977483d2377ac.webp?size=256",
    social: {
      twitter: "https://linktr.ee/Stying",
      linkedin: "https://linktr.ee/Stying",
      github: "https://linktr.ee/Stying",
    },
  },
  {
    name: "Ishika",
    position: "Graphics Designer",
    description:
      "I am the one who is responsible for the logo and the graphics of the bot. I make sure that the bot looks good.",
    avatarUrl:
      "https://cdn.discordapp.com/avatars/994993937586585691/ccaeefe58c5b6c6371862d3e3f92c1c4.webp?size=256",
    social: {
      twitter: "#",
      linkedin: "https://#",
      github: "#",
    },
  },
  {
    name: "Silly Development",
    position: "Hosting Partner",
    description:
      "Silly Development is one of the most reputed hosting providers in the world. They are responsible for hosting the bot.",
    avatarUrl:
      "https://cdn.discordapp.com/icons/921530640510382100/a_bfe2a7b4202ba3f5fb100052a76435e6.webp?size=256",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "https://github.com/Silly-Development",
    },
  },
];
const TeamCmp = () => {
  return (
    <div className="container py-32">
      <div className="">
        <div>
          <div className="-mx-4 mb-8">
            <h1 className="text-4xl font-black">Meet our Team</h1>
            <p className="text-zinc-700 dark:text-zinc-400">
              Meet the people who made it possible. Our developers and partners
              are working diligently to improve the bot.
            </p>
          </div>
          <hr className="my-4 -mx-4" />
          <div className="grid grid-cols-1 py-10 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <Card className="flex flex-col h-full">
                  <CardHeader className="flex flex-col items-center text-center">
                    <Avatar className="mb-4 w-24 h-24">
                      <AvatarImage src={member.avatarUrl} />
                      <AvatarFallback>{member.name[0]}</AvatarFallback>
                    </Avatar>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription>{member.position}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p>{member.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-center space-x-4 mt-4">
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter size={24} />
                    </a>
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin size={24} />
                    </a>
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub size={24} />
                    </a>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCmp;

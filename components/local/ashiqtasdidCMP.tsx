"use client";

import FooterMain from "@/components/local/FooterMain";
import Nav from "@/components/local/Nav";
import Image from "next/image";
import Link from "next/link";
import {
  FaTwitter,
  FaGithub,
  FaFacebook,
  FaYoutube,
  FaSpotify,
} from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { motion } from "framer-motion";
import React from "react";

const ashiqtasdid = () => {
  return (
    <div className="px-4 py-12  lg:px-8">
      <div className="py-10 sm:py-20 flex flex-col items-center">
        <div className="rounded-full overflow-hidden p-2">
          <Image
            className="rounded-full"
            width={256}
            height={256}
            alt="ashiqtasdid"
            src="https://cdn.discordapp.com/avatars/681552494064697350/e42f7681ed451c163b89a269aaba7877.webp?size=256"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mt-6 dark:text-white">
          Md. Ashiquzzaman Khan
        </h1>
        <p className="text-lg sm:text-xl font-medium text-gray-800 dark:text-gray-200">
          Lead Developer
        </p>
        <div className="mt-6 text-lg sm:text-xl text-gray-800 dark:text-gray-300 max-w-lg">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-"
          >
            I am Md. Ashiquzzaman Khan, CEO of Spectex. I am a full-stack web
            developer with a passion for web technologies. With over 5 years of
            experience, I specialize in developing web applications using React,
            Node.js, Express.js, and MongoDB. Additionally, I am proficient in
            creating RESTful APIs and working with databases. My strong
            understanding of web technologies and eagerness to learn new
            technologies drive me to continually seek new challenges and
            opportunities for growth as a developer.
          </motion.p>
        </div>
        <div className="flex mt-6">
          <Link
            target="_blank"
            href="https://twitter.com/theashiqtasdid"
            passHref
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 mx-3 cursor-pointer transition-colors duration-300"
            >
              <FaTwitter size="2em" />
            </motion.div>
          </Link>
          <Link target="_blank" href="https://github.com/ashiqtasdid" passHref>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 mx-3 cursor-pointer transition-colors duration-300"
            >
              <FaGithub size="2em" />
            </motion.div>
          </Link>
          <Link
            target="_blank"
            href="https://facebook.com/ashiq.tasdid.1"
            passHref
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 mx-3 cursor-pointer transition-colors duration-300"
            >
              <FaFacebook size="2em" />
            </motion.div>
          </Link>
          <Link
            target="_blank"
            href="https://youtube.com/@ashiqtasdid"
            passHref
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 mx-3 cursor-pointer transition-colors duration-300"
            >
              <FaYoutube size="2em" />
            </motion.div>
          </Link>
          <Link
            target="_blank"
            href="https://open.spotify.com/artist/6kLu7rLoPcjvSukNwbWAom?si=3ReHAVLzR-2ZTy7gVVtVJQ"
            passHref
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 mx-3 cursor-pointer transition-colors duration-300"
            >
              <FaSpotify size="2em" />
            </motion.div>
          </Link>
          <Link target="_blank" href="https://ashiqtasdid.github.io" passHref>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 mx-3 cursor-pointer transition-colors duration-300"
            >
              <FiGlobe size="2em" />
            </motion.div>
          </Link>
        </div>
      </div>
      <hr className="my-4 dark:hidden" />
    </div>
  );
};

export default ashiqtasdid;

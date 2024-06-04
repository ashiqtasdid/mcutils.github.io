import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { GoAlertFill } from "react-icons/go";
import Link from "next/link";

const FooterMain = () => {
  return (
    <div className="dark:bg-zinc-800 pt-6">
      <div className=" hidden md:flex mx-10 justify-between">
        <div className="space-y-3 my-auto">
          <div>Logo</div>
          <span className="text-sm">Copyright 2024, Minecraft Utilities. </span>
          <div className="text-sm">
            <Link href={"/EULA"}>
              {" "}
              <span className="pr-2 hover:underline">EULA</span>
            </Link>
            <span className="pr-2">·</span>
            <Link href={"/terms"}>
              {" "}
              <span className="pr-2 hover:underline">Terms</span>
            </Link>
          </div>
        </div>
        <div className="flex justify-evenly space-x-20">
          <div className="space-y-2">
            <div className="text-xl py-3">Product</div>
            <div className="hover:cursor-pointer hover:underline">
              <Link href={"/invite"}>Invite</Link>
            </div>
            <div className="hover:cursor-pointer hover:underline">
              <Link href={"/faq"}>FAQ</Link>
            </div>
            <div className="hover:cursor-pointer hover:underline">
              <Link href={"/EULA"}>EULA</Link>
            </div>
            <div className="hover:cursor-pointer hover:underline">Roadmap</div>
          </div>
          <div className="space-y-2">
            <div className="text-xl py-3">Development</div>
            <div className="hover:cursor-pointer hover:underline">
              Documentation
            </div>
            <div className="hover:cursor-pointer hover:underline">
              <Link
                href={"https://github.com/ashiqtasdid/minecraft-utilities"}
                target="_blank"
              >
                Github
              </Link>
            </div>
            <div className="hover:cursor-pointer hover:underline">Status</div>
            <div className="hover:cursor-pointer hover:underline">
              Contributors
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-xl py-3">Company</div>
            <div className="hover:cursor-pointer hover:underline">About</div>
            <div className="hover:cursor-pointer hover:underline">Contact</div>
            <div className="hover:cursor-pointer hover:underline">Team</div>
            <div className="hover:cursor-pointer hover:underline">
              <Link href={"/terms"}>Terms & Conditions</Link>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-xl py-3">Community</div>
            <div className="hover:cursor-pointer hover:underline">
              <Link href={"/blog"}>Blog</Link>
            </div>
            <div className="hover:cursor-pointer hover:underline">
              <Link href={"https://x.com/mc_utilities"}>Twitter</Link>
            </div>
            <div className="hover:cursor-pointer hover:underline">
              <Link href={"https://discord.gg/jf28jcFJk9"} target="_blank">
                Discord
              </Link>
            </div>
            <div className="hover:cursor-pointer hover:underline">
              Bot Testers
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden lg:hidden mx-3">
        <div className="py-10 my-auto">
          <div>Logo</div>
          <span className="text-sm">Copyright 2024, Minecraft Utilities. </span>
          <div className="text-sm">
            <Link href={"/EULA"}>
              {" "}
              <span className="pr-2 hover:underline">EULA</span>
            </Link>
            <span className="pr-2">·</span>
            <Link href={"/terms"}>
              {" "}
              <span className="pr-2 hover:underline">Terms</span>
            </Link>
          </div>
        </div>
        <div className="space-y-5">
          <div className="space-y-2">
            <div className="text-xl py-3">Product</div>
            <div className="hover:cursor-pointer hover:underline">
              <Link href={"/invite"}>Invite</Link>
            </div>
            <div className="hover:cursor-pointer hover:underline">
              <Link href={"/faq"}>FAQ</Link>
            </div>
            <div className="hover:cursor-pointer hover:underline">
              <Link href={"/EULA"}>EULA</Link>
            </div>
            <div className="hover:cursor-pointer hover:underline">Roadmap</div>
          </div>
          <div className="space-y-2">
            <div className="text-xl py-3">Development</div>
            <div className="hover:cursor-pointer hover:underline">
              Documentation
            </div>
            <div className="hover:cursor-pointer hover:underline">
              <Link
                href={"https://github.com/ashiqtasdid/minecraft-utilities"}
                target="_blank"
              >
                Github
              </Link>
            </div>
            <div className="hover:cursor-pointer hover:underline">Status</div>
            <div className="hover:cursor-pointer hover:underline">
              Contributors
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-xl py-3">Company</div>
            <div className="hover:cursor-pointer hover:underline">About</div>
            <div className="hover:cursor-pointer hover:underline">Contact</div>
            <div className="hover:cursor-pointer hover:underline">Team</div>
            <div className="hover:cursor-pointer hover:underline">
              <Link href={"/terms"}>Terms & Conditions</Link>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-xl py-3">Community</div>
            <div className="hover:cursor-pointer hover:underline">
              <Link href={"/blog"}>Blog</Link>
            </div>
            <Link href={"https://x.com/mc_utilities"}>Twitter</Link>
            <div className="hover:cursor-pointer hover:underline">
              <Link href={"https://discord.gg/jf28jcFJk9"} target="_blank">
                Discord
              </Link>
            </div>
            <div className="hover:cursor-pointer hover:underline">
              Bot Testers
            </div>
          </div>
        </div>
      </div>
      <div className="pt-6">
        <div className="dark:bg-blue-600 flex justify-between py-1 bg-zinc-300">
          <div className="mx-10 hover:underline">Sitemap</div>
          <div className="mx-10 flex space-x-2 pt-1">
            <span className="hover:cursor-pointer">
              <Link href={"https://x.com/mc_utilities"}>
                <FaSquareXTwitter />
              </Link>
            </span>
            <span className="hover:cursor-pointer">
              <Link href={"https://github.com/ashiqtasdid/minecraft-utilities"}>
                <FaGithubSquare />
              </Link>
            </span>
            <span className="hover:cursor-pointer">
              <GoAlertFill />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMain;

import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { GoAlertFill } from "react-icons/go";
import Link from "next/link";
import { Target } from "lucide-react";
import Image from "next/image";
import logo from "../../assets/logo.png";

const FooterMain = () => {
  return (
    <div className="dark:bg-zinc-800 pt-6">
      <div className=" hidden md:flex mx-10 justify-between">
        <div className="space-y-3 my-auto">
          <Link href={"/"}>
            <div>
              <Image src={logo} height={50} width={50} alt="logo" />
            </div>
          </Link>
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
            <div className="hover:cursor-pointer hover:underline">
              <Link href={"/roadmap"}>Roadmap</Link>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-xl py-3">Development</div>
            <div className="hover:cursor-pointer hover:underline">
              <Link
                href={"https://minecraftutilities.github.io/documentation/"}
              >
                Documentation
              </Link>
            </div>
            <div className="hover:cursor-pointer hover:underline">
              <Link
                href={"https://github.com/ashiqtasdid/minecraft-utilities"}
                target="_blank"
              >
                Github
              </Link>
            </div>
            <div className="hover:cursor-pointer hover:underline">
              <Link
                href={"https://minecraftutilities.statuspage.io"}
                target="_blank"
              >
                Status
              </Link>
            </div>
            <div className="hover:cursor-pointer hover:underline">
              Contributors
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-xl py-3">Company</div>
            <div className="hover:cursor-pointer hover:underline">About</div>
            <div className="hover:cursor-pointer hover:underline">Contact</div>
            <div className="hover:cursor-pointer hover:underline">
              <Link href={"/team"}>Team</Link>
            </div>
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
          <Link href={"/"}>
            <div>
              <Image src={logo} height={30} width={30} alt="logo" />
            </div>
          </Link>
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
            <div className="text-2xl py-3 font-bold">Product</div>
            <div className="hover:cursor-pointer hover:underline">
              <Link href={"/invite"}>Invite</Link>
            </div>
            <div className="hover:cursor-pointer hover:underline">
              <Link href={"/faq"}>FAQ</Link>
            </div>
            <div className="hover:cursor-pointer hover:underline">
              <Link href={"/EULA"}>EULA</Link>
            </div>
            <div className="hover:cursor-pointer hover:underline">
              <Link href={"/roadmap"}>Roadmap</Link>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl py-3 font-bold">Development</div>
            <div className="hover:cursor-pointer hover:underline">
              <Link
                href={"https://minecraftutilities.github.io/documentation/"}
              >
                Documentation
              </Link>
            </div>
            <div className="hover:cursor-pointer hover:underline">
              <Link
                href={"https://github.com/ashiqtasdid/minecraft-utilities"}
                target="_blank"
              >
                Github
              </Link>
            </div>
            <div className="hover:cursor-pointer hover:underline">
              <Link
                href={"https://minecraftutilities.statuspage.io"}
                target="_blank"
              >
                Status
              </Link>
            </div>
            <div className="hover:cursor-pointer hover:underline">
              Contributors
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl py-3 font-bold">Company</div>
            <div className="hover:cursor-pointer hover:underline">About</div>
            <div className="hover:cursor-pointer hover:underline">Contact</div>
            <div className="hover:cursor-pointer hover:underline">
              <Link href={"/team"}>Team</Link>
            </div>
            <div className="hover:cursor-pointer hover:underline">
              <Link href={"/terms"}>Terms & Conditions</Link>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl py-3 font-bold">Community</div>
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
          <div className="flex mx-5 space-x-2">
            <div>
              Powered By:{" "}
              <Link
                href={"https://sillydev.co.uk"}
                className="underline hover:underline"
                target="_blank"
              >
                Sillydev
              </Link>
            </div>
            <Link href={"/sitemap.xml"}>
              <div className="mx-10 underline cursor-pointer hover:underline">
                Sitemap
              </div>
            </Link>
          </div>
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

import React, { useEffect, useRef, useState, ChangeEvent } from "react";
import { motion as m, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Separator } from "../ui/separator";

interface Player {
  name: string;
  uuid: string;
}

interface Plugin {
  name: string;
  version: string;
}

interface Mod {
  name: string;
  version: string;
}

interface MOTD {
  raw: string[];
  clean: string[];
  html: string[];
}

interface Protocol {
  version: number;
  name: string;
}

interface Map {
  raw: string;
  clean: string;
  html: string;
}

interface ServerData {
  online: boolean;
  ip: string;
  port: number;
  hostname?: string;
  version: string;
  protocol?: Protocol;
  icon?: string;
  software?: string;
  map?: Map;
  gamemode?: string;
  players: {
    online: number;
    max: number;
    list?: Player[];
  };
  plugins?: Plugin[];
  mods?: Mod[];
  motd: MOTD;
}

const Hero: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [serverData, setServerData] = useState<ServerData | null>(null);

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["0 1", "0.8 1"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Submitted IP:", inputValue);
    const apiUrl = `https://api.mcsrvstat.us/3/${inputValue}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data: ServerData) => setServerData(data));
  };

  useEffect(() => {
    console.log("IP Value:", inputValue);
  }, [inputValue]);

  return (
    <m.div
      ref={targetRef}
      className="flex z-0 h-screen justify-center relative items-center"
      style={{
        scale: scale,
        opacity: opacity,
      }}
    >
      <div className="flex justify-between mx-10">
        <m.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          whileInView="animate"
          transition={{ duration: 0.5 }}
          whileHover={{
            rotate: "2.5deg",
            scale: 1.1,
          }}
          className="w-[400px] border-2 h-[500px] border-gray-400 dark:border-black px-5 py-5 rounded-xl dark:bg-blue-1000 bg-white"
        >
          <div className="text-blue-500 font-semibold flex justify-between hover:cursor-pointer">
            <div>Minecraft Utilities</div>
            <div>
              <Image
                src={"https://i.postimg.cc/WFh5c9xy/icon.png"}
                className="rounded-md"
                height={50}
                width={50}
                alt="image"
              />
            </div>
          </div>
          <div className="text-black dark:text-white font-medium">
            Here is the requested server status
          </div>
          <div className="text-black dark:text-white font-semibold pb-1 pt-2">
            Numeric IP
          </div>
          <div className="bg-gray-100 dark:bg-zinc-900 rounded-sm py-1">
            <span className="mx-2">209.222.115.47</span>
          </div>
          <div className="text-black dark:text-white font-semibold pt-1">
            Server IP
          </div>
          <div className="bg-gray-100 dark:bg-zinc-900 rounded-sm py-1">
            <span className="mx-2">mc.hypixel.net</span>
          </div>
          <div className="text-black dark:text-white font-semibold pt-1">
            Players Online - [Online / Max]
          </div>
          <div className="bg-gray-100 dark:bg-zinc-900 rounded-sm py-1">
            <span className="mx-2">25556 / 200000</span>
          </div>
          <div className="text-black dark:text-white font-semibold pt-1">
            Version
          </div>
          <div className="bg-gray-100 dark:bg-zinc-900 rounded-sm py-1">
            <span className="mx-2">Requires MC 1.8 / 1.20</span>
          </div>
          <div className="text-black dark:text-white font-semibold pt-1">
            EULA
          </div>
          <div className="bg-gray-100 dark:bg-zinc-900 rounded-sm py-1">
            <span className="mx-2">True</span>
          </div>
          <div className="text-black dark:text-white font-semibold pt-1">
            MOTD
          </div>
          <div className="bg-gray-100 dark:bg-zinc-900 rounded-sm py-1">
            <span className="mx-2">
              {" "}
              Hypixel Network [1.8-1.20], NEW PTL GAME: SHEEP WARS | SB 0.20.1
            </span>
          </div>
        </m.div>
        <div className="w-[60%] m-auto space-y-5">
          <h1 className="font-black justify-center text-center flex text-5xl">
            Get Real-Time Info About Your Minecraft Server
          </h1>
          <div className="font-medium text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ad
            nihil magnam consectetur fuga labore praesentium tenetur blanditiis
            veniam nam possimus impedit quasi ex suscipit voluptatibus, autem
            vitae quo recusandae. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Neque, quidem accusamus qui eum laudantium odio
            deleniti necessitatibus. Magnam, eligendi! Commodi iusto voluptas
            deserunt ex pariatur tempora mollitia veritatis voluptatibus
            repellat.
          </div>
          <div className="flex justify-center items-center">
            <Sheet>
              <SheetTrigger asChild>
                <button className="rounded-sm border-2 border-black bg-white px-3 py-1.5 font-normal text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-xl active:shadow-none">
                  Try it now
                </button>
              </SheetTrigger>
              <SheetContent>
                <SheetTitle>Minecraft Utilities</SheetTitle>
                <div className="py-10 mx-auto flex items-center justify-center space-x-3 relative">
                  <Input
                    placeholder="Enter the IP"
                    className="ipInput"
                    id="ip"
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                  />
                  <button
                    onClick={handleSubmit}
                    className="rounded-sm border-2 border-black bg-white px-3 py-1 font-normal text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-xl active:shadow-none"
                  >
                    Submit
                  </button>
                </div>
                <div>
                  {serverData && (
                    <div className="mt-4 p-4 font-mono bg-gray-100 dark:bg-zinc-900 rounded-sm text-black dark:text-white">
                      {serverData.online ? (
                        <div className="space-y-2">
                          <div>Online: {serverData.online ? "Yes" : "No"}</div>
                          <div>IP: {serverData.ip}</div>
                          <div>Port: {serverData.port}</div>
                          {serverData.hostname && (
                            <div>
                              Hostname:{" "}
                              {serverData.hostname.toLocaleUpperCase()}
                            </div>
                          )}
                          <div>Version: {serverData.version}</div>
                          {serverData.protocol && (
                            <div>
                              Protocol: {serverData.protocol.name} (v
                              {serverData.protocol.version})
                            </div>
                          )}
                          {serverData.icon && (
                            <Image
                              src={serverData.icon}
                              width={64}
                              height={64}
                              alt="icon"
                            />
                          )}
                          {serverData.software && (
                            <div>Software: {serverData.software}</div>
                          )}
                          {serverData.map && (
                            <div>Map: {serverData.map.clean}</div>
                          )}
                          {serverData.gamemode && (
                            <div>Gamemode: {serverData.gamemode}</div>
                          )}
                          <div>
                            Players: {serverData.players.online} /{" "}
                            {serverData.players.max}
                          </div>
                          {serverData.players.list && (
                            <div>
                              Player List:
                              <ul>
                                {serverData.players.list.map((player) => (
                                  <li key={player.uuid}>
                                    {player.name} (UUID: {player.uuid})
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {serverData.plugins && (
                            <div>
                              Plugins:
                              <ul>
                                {serverData.plugins.map((plugin) => (
                                  <li key={plugin.name}>
                                    {plugin.name} (v{plugin.version})
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {serverData.mods && (
                            <div>
                              Mods:
                              <ul>
                                {serverData.mods.map((mod) => (
                                  <li key={mod.name}>
                                    {mod.name} (v{mod.version})
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          <div>MOTD:</div>
                          <div>{serverData.motd.clean.join("\n")}</div>
                        </div>
                      ) : (
                        <div>Server is offline</div>
                      )}
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </m.div>
  );
};

export default Hero;

import React, { Children, useRef } from "react";
import { motion as m, useScroll, useTransform } from "framer-motion";

const HeroMidM = () => {
  return (
    <m.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
    className="flex justify-center items-center text-center align-middle h-screen">
        <div>
      <m.div className="mx-3 space-y-5">
        <h1 className="text-3xl font-black">
          We are an Open Source Discord Bot
        </h1>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          sunt dignissimos voluptates ea, tempora, sequi quasi accusamus
          doloribus aliquam, fuga minima! Odio dolor, voluptatem rem officiis
          dolorem obcaecati maxime saepe! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Iste sit non a quos, at itaque consectetur rerum
          numquam amet inventore. Illo quaerat esse labore, reprehenderit
          eligendi a. Mollitia, totam unde?
        </div>
        <div className="space-x-3">
          <button className="rounded-sm border-2 border-black bg-white px-3 py-1.5 font-normal text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-xl active:shadow-none">
            Github Repo
          </button>
          <button className="rounded-sm border-2 border-zinc-800 bg-zinc-800 px-3 py-1.5 font-normal text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-xl active:shadow-none">
            Learn more
          </button>
        </div>
      </m.div>
      <div className="py-10">
        <div>
          <m.div
            whileHover={{
              scale: 1.01,
              transition: { duration: 0.5 },
            }}
            className="w-[400px] mx-3 font-mono bg-gray-100 dark:bg-zinc-800 px-5 py-5 rounded-md text-left"
          >
            <m.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ margin: "-150px" }}
            >
              <m.div>
                <span className="dark:text-emerald-300 text-purple-400">
                  const
                </span>{" "}
                <span className="text-purple-400">&#123;</span>{" "}
                <span className="text-blue-400">Client</span>
                <span className="text-purple-400">,</span>{" "}
                <span className="text-blue-400">Collection</span>{" "}
                <span className="text-purple-400">&#125;</span>{" "}
                <span className="text-purple-400"> = </span>
                <span className="dark:text-emerald-300 text-purple-400">
                  require{" "}
                </span>
                <span className="text-purple-400">(</span>
                <span className="dark:text-lime-300 text-cyan-500">
                  &apos;discord.js&apos;
                </span>
                <span className="text-purple-400">)</span>;
              </m.div>
              <m.div>
                <span className="dark:text-emerald-300 text-purple-400">
                  const
                </span>{" "}
                <span className="text-blue-400">client</span>{" "}
                <span className="text-purple-400">=</span>{" "}
                <span className="dark:text-emerald-300 text-purple-400">
                  new
                </span>{" "}
                <span className="text-blue-400">Client</span>
                <span className="text-purple-400">()</span>;
              </m.div>
              <div className="invisible">.</div>
              <div>
                <span className="text-blue-400">client</span>
                <span className="text-purple-400">.</span>
                <span className="dark:text-blue-300 text-blue-400">on</span>
                <span className="text-purple-400">{"("}</span>{" "}
                <span className="dark:text-lime-300 text-cyan-500">
                  &apos;ready&apos;
                </span>{" "}
                <span className="text-purple-400">,</span>{" "}
                <span className="text-purple-400">()={">"}</span>{" "}
                <span className="text-purple-400">{"{"}</span>
              </div>
              <div>
                <span className="text-blue-400">console</span>
                <span className="text-purple-400">.</span>
                <span className="dark:text-blue-300 text-blue-400">log</span>
                <span className="text-purple-400">{"("}</span>{" "}
                <span className="dark:text-lime-300 text-cyan-500">
                  &quot;We&apos;re an Open Source Discord Bot&quot;
                </span>{" "}
                <span className="text-purple-400">{")"}</span>;
              </div>
              <div>
                <span className="text-purple-400">{"})"}</span>
              </div>
              <div className="invisible">.</div>
              <div>
                <span className="text-gray-400">
                  # Do you really think we&apos;d show the token?
                </span>
              </div>
              <div>
                <span className="text-blue-400">client</span>
                <span className="text-purple-400">.</span>
                <span className="dark:text-blue-300 text-blue-400">login</span>
                <span className="text-purple-400">{"("}</span>
                <span className="text-blue-400">token</span>
                <span className="text-purple-400">{")"}</span>;
              </div>
            </m.div>
          </m.div>
        </div>
        </div>
      </div>
    </m.div>
  );
};

export default HeroMidM;

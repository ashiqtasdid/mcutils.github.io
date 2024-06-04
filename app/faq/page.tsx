import FooterMain from "@/components/local/FooterMain";
import Nav from "@/components/local/Nav";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const faq = () => {
  return (
    <div>
      <Nav />
      <div className="container py-32 h-screen text-center align-middle my-auto flex justify-center">
        <div className="content-container md:w-3/4 mx-auto">
          {" "}
          {/* Added responsive class */}
          <h1 className="text-6xl font-black text-center">
            Frequently Asked Questions
          </h1>
          <hr className="my-4" />
          <div className="flex justify-center text-center items-center py-10 align-middle">
            <Accordion type="single" collapsible className="w-full">
              {" "}
              <AccordionItem value="item-1">
                {" "}
                <AccordionTrigger>
                  How can I invite this bot?
                </AccordionTrigger>{" "}
                <AccordionContent>
                  You can invite this bot by clicking on the invite button on
                  the Navigation Bar.{" "}
                </AccordionContent>{" "}
              </AccordionItem>{" "}
              <AccordionItem value="item-2">
                {" "}
                <AccordionTrigger>
                  How often the bot gets updated?{" "}
                </AccordionTrigger>{" "}
                <AccordionContent>
                  Every few weeks, we push updates to the bot to make it better
                  and more efficient. At times, we also push hotfixes to resolve
                  any issues.{" "}
                </AccordionContent>{" "}
              </AccordionItem>{" "}
              <AccordionItem value="item-3">
                {" "}
                <AccordionTrigger>
                  What if I encounter an issue with the bot? {" "}
                </AccordionTrigger>{" "}
                <AccordionContent>
                  You can report the issue by using the help command or by
                  joining our support server.{" "}
                </AccordionContent>{" "}
              </AccordionItem>{" "}
              <AccordionItem value="item-4">
                {" "}
                <AccordionTrigger>
                  What is the Discord Server link?
                </AccordionTrigger>{" "}
                <AccordionContent>
                  You can join the Discord server by clicking this{" "}
                  <Link
                    href={"https://discord.gg/jf28jcFJk9"}
                    className="font-bold underline"
                    target="_blank"
                  >
                    link
                  </Link>{" "}
                </AccordionContent>{" "}
              </AccordionItem>{" "}
              <AccordionItem value="item-5">
                {" "}
                <AccordionTrigger>How can I contribute </AccordionTrigger>{" "}
                <AccordionContent>
                  You can contribute by going to our{" "}
                  <Link
                    className="font-bold underline "
                    href={"https://github.com/ashiqtasdid/minecraft-utilities"}
                    target="_blank"
                  >
                    GitHub repository{" "}
                  </Link>
                  and making a pull request.{" "}
                </AccordionContent>{" "}
              </AccordionItem>{" "}
            </Accordion>
          </div>
        </div>
      </div>
      <hr className="my-4 dark:hidden" />
      <FooterMain />
    </div>
  );
};

export default faq;

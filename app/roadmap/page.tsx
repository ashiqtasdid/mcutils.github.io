import FooterMain from "@/components/local/FooterMain";
import Nav from "@/components/local/Nav";
import React from "react";

const roadmap = () => {
  return (
    <div>
      <Nav />
      <div className="py-32">
        <div className="flex justify-center items-center text-center align-middle">
          <div className="text-3xl font-bold">
            <h1>Roadmap</h1>
          </div>
        </div>
        <div className="mx-10">
          <div className="pt-10 prose">
            <h1 className="font-bold text-2xl">Top Objectives for 2024:</h1>
            <ul>
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

      <hr className="my-4" />
      <FooterMain />
    </div>
  );
};

export default roadmap;

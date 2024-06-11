"use client";
import Hero from "@/components/local/Hero";
import Nav from "@/components/local/Nav";
import HeroNext from "@/components/local/HeroNext";
import { Separator } from "@/components/ui/separator";
import HeroMid from "@/components/local/HeroMid";
import HeroCentral from "@/components/local/HeroCentral";
import HeroRes from "@/components/local/HeroRes";
import Reviews from "@/components/local/Reviews";
import HeroBlockCMD from "@/components/local/HeroBlockCMD";
import HeroBlockRes from "@/components/local/HeroBlockRes";
import FooterMain from "@/components/local/FooterMain";
import HeroNextM from "@/components/sm/HeroNextM";
import HeroM from "@/components/sm/HeroM";
import HeroMidM from "@/components/sm/HeroMidM";
import HeroCentralM from "@/components/sm/HeroCentralM";
import HeroResM from "@/components/sm/HeroResM";
import ReviewM from "@/components/sm/ReviewM";
import HeroBlockCMDM from "@/components/sm/HeroBlockCMDM";

export default function Home() {
  return (
    <main>
      <Nav />
      <div className="hidden md:block">
        <HeroNext />
      </div>
      <div className="block pb-10 md:hidden lg:hidden">
        <HeroNextM />
      </div>
      <Separator />
      <div className="hidden md:block">
        <Hero />
      </div>
      <div className="block pb-10 md:hidden lg:hidden">
        <HeroM />
      </div>
      <Separator />
      <div className="hidden md:block">
        <HeroMid />
      </div>
      <div className="block pb-10 md:hidden lg:hidden">
        <HeroMidM />
      </div>
      <Separator />
      <div className="hidden md:block">
        <HeroCentral />
      </div>
      <div className="block pb-10 md:hidden lg:hidden">
        <HeroCentralM />
      </div>
      <div className="hidden md:block">
        <HeroRes />
      </div>
      <div className="block pb-10 md:hidden lg:hidden">
        <HeroResM />
      </div>
      <div className="hidden md:block">
        <HeroBlockCMD />
      </div>
      <div className="block pb-10 md:hidden lg:hidden">
        <HeroBlockCMDM />/
      </div>

      <HeroBlockRes />
      <div className="hidden md:block">
        <Reviews />
      </div>
      <div className="block pb-10 md:hidden lg:hidden">
        <ReviewM />
      </div>
      <hr className="my-4 mx-4 dark:hidden" />
      <FooterMain />
    </main>
  );
}

import React from "react";
import ReactCountryFlag from "react-country-flag";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { motion as m } from "framer-motion";
import { useEffect } from "react";

const Header = () => {

  useEffect(() => {
    window.addEventListener('scroll', function(){
      document.getElementById('header')?.classList.toggle('hidden')
    })

  }, [])

  return (
    <m.div className="bg-blue-500" id="header">
      <div className="py-2 hidden md:block justify-center text-center dark:text-white text-white">
        We stand with the people of <ReactCountryFlag countryCode="PS" svg />
        Palestine. We stand against the atrocities that Israel is committing. We
        show full solidarity with those who died at the hands of Israel.{" "}
        <Link href={"#"} className="hover:underline">
          Learn more.
        </Link>
      </div>
      <div className="py-1.5 md:hidden dark:text-white text-white">
        <Marquee>
          We stand with the people of <ReactCountryFlag countryCode="PS" svg />
          Palestine. We stand against the atrocities that Israel is committing.
          We show full solidarity with those who died at the hands of Israel.{" "}
          <Link href={"#"} className="hover:underline">
            Learn more.
          </Link>
        </Marquee>
      </div>
    </m.div>
  );
};

export default Header;

"use client";

import { useState } from "react";
import BottomRow from "./Bottomrow";
import CentralNodes from "./Centralnodes";
import MobileMenu from "./mobilemenu";
import Nav from "./nav";

function GridLines() {
  return <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:25%_100%,100%_25%]" />;
}

export default function LumenHero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <video
        className="absolute inset-0 w-full h-full object-cover anim-fade-in"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260813_115057_94c3699b-0fd1-4124-bcf3-3626bb8c1f77.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="relative z-10 w-full h-full">
        <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <h1
          className="font-graphik text-white font-normal leading-[1em] absolute anim-fade-up
                     text-[32px] sm:text-[48px] md:text-[68px]
                     top-[140px] sm:top-[160px] md:top-[178px]
                     left-5 md:left-[35px]
                     max-w-[300px] sm:max-w-[420px] md:max-w-[554px]"
          style={{ animationDelay: "400ms" }}
        >
          Web Developer × AI Automation.
        </h1>

        <GridLines />
        <CentralNodes />
        <BottomRow />
      </div>
    </section>
  );
}
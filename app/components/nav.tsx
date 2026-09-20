"use client";

import { MapPin, Menu, X } from "lucide-react";
import Link from "next/link";

interface NavItemProps {
  number: string;
  label: string;
  delay: number;
}

function NavItem({ number, label, delay }: NavItemProps) {
  return (
    <div
      className="flex items-center gap-[3px] anim-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="font-manrope text-[#AFDDFF]/80 text-[13px] leading-[15.6px]">
        {number}.
      </span>
      <Link href={`#${label.toLowerCase()}`} className="font-manrope text-white text-[13px] leading-[15.6px] cursor-pointer hover:text-[#AFDDFF] transition-colors">
        {label}
      </Link>
    </div>
  );
}

const NAV_ITEMS = [
  { number: "01", label: "ABOUT", delay: 350 },
  { number: "02", label: "SKILLS", delay: 450 },
  { number: "03", label: "PROJECTS", delay: 550 },
  { number: "04", label: "CONTACT", delay: 650 },
];

interface NavProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export default function Nav({ menuOpen, setMenuOpen }: NavProps) {
  return (
    <nav className="absolute top-0 left-0 w-full flex items-center px-5 md:px-[35px] py-5 md:py-[27px]">
      <div className="flex min-w-0 items-center gap-5 xl:gap-[40px]">
        <span
          className="font-graphik text-white text-[18px] md:text-[21px] leading-[21px] whitespace-nowrap anim-fade-up"
          style={{ animationDelay: "200ms" }}
        >
          SANKET JAMUNDE
        </span>

        <div className="hidden lg:flex items-center gap-4 xl:gap-[40px]">
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.number} {...item} />
          ))}
        </div>
      </div>

      <div
        className="hidden lg:flex items-center gap-2 xl:gap-[12px] ml-auto anim-slide-right"
        style={{ animationDelay: "600ms" }}
      >
        <MapPin className="w-[15px] h-[15px]" strokeWidth={1.5} color="#fff" />
        <span className="font-manrope text-white text-[13px] leading-[15.6px]">
       
        </span>
        <span className="font-manrope text-[#AFDDFF] text-[13px] leading-[15.6px]">
          [ AVAILABLE ]
        </span>
        <span className="font-manrope text-white text-[13px] leading-[15.6px] ml-2 xl:ml-[20px]">
          STATUS:
        </span>
        <span className="bg-[#AFDDFF] rounded-[3px] px-[5px] py-[2px] text-black font-manrope text-[13px] leading-[15.6px]">
          OPEN_TO_WORK
        </span>
      </div>

      <button
        type="button"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden ml-auto relative w-[40px] h-[40px] flex items-center justify-center anim-fade-in"
        style={{ animationDelay: "400ms" }}
      >
        <span
          className={`absolute transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] ${
            menuOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
          }`}
        >
          <Menu className="w-[22px] h-[22px] text-white" strokeWidth={1.5} />
        </span>
        <span
          className={`absolute transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] ${
            menuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
          }`}
        >
          <X className="w-[22px] h-[22px] text-white" strokeWidth={1.5} />
        </span>
      </button>
    </nav>
  );
}
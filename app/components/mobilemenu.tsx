"use client";

import Link from "next/link";

function MapPin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function X(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

const NAV_ITEMS = [
  { number: "01", label: "ABOUT" },
  { number: "02", label: "SKILLS" },
  { number: "03", label: "PROJECTS" },
  { number: "04", label: "CONTACT" },
];

interface MobileMenuProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export default function MobileMenu({ menuOpen, setMenuOpen }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        menuOpen ? "visible" : "invisible"
      }`}
    >
      <div
        onClick={() => setMenuOpen(false)}
        className={`absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          menuOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`relative h-full flex flex-col px-5 pt-24 pb-10 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-5 w-[40px] h-[40px] flex items-center justify-center"
        >
          <X className="w-[22px] h-[22px] text-white" strokeWidth={1.5} />
        </button>

        <div className="flex flex-col gap-8">
          {NAV_ITEMS.map((item, i) => (
            <div
              key={item.number}
              className={`flex items-center gap-3 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                menuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
              }`}
              style={{ transitionDelay: menuOpen ? `${150 + i * 75}ms` : "0ms" }}
            >
              <span className="font-manrope text-[#AFDDFF]/80 text-[14px] leading-[1]">
                {item.number}.
              </span>
              <Link href={`#${item.label.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="font-manrope text-white text-[28px] leading-[1.2] tracking-tight">
                {item.label}
              </Link>
            </div>
          ))}
        </div>

        <div
          className={`mt-auto pt-10 border-t border-white/10 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: menuOpen ? "450ms" : "0ms" }}
        >
          <div className="flex items-center gap-[10px] mb-3">
            <MapPin className="w-[15px] h-[15px]" strokeWidth={1.5} color="#fff" />
            <span className="font-manrope text-white text-[13px] leading-[15.6px]">
              Chhatrapati Sambhajinagar, IN
            </span>
            <span className="font-manrope text-[#AFDDFF] text-[13px] leading-[15.6px]">
              [ AVAILABLE ]
            </span>
          </div>
          <div className="flex items-center gap-[8px]">
            <span className="font-manrope text-white text-[13px] leading-[15.6px]">
              STATUS:
            </span>
            <span className="bg-[#AFDDFF] rounded-[3px] px-[5px] py-[2px] text-black font-manrope text-[13px] leading-[15.6px]">
              OPEN_TO_WORK
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
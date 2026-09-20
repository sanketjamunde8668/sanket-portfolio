import Link from "next/link";

export default function BottomRow() {
  return (
    <div
      className="absolute bottom-5 md:bottom-[35px] left-5 md:left-[35px] right-5 md:right-[35px]
                 flex flex-col md:flex-row items-start md:items-end justify-between gap-5 md:gap-0"
    >
      <div className="flex items-center gap-[12px]">
        <Link
          href="/#projects"
          className="bg-[#AFDDFF] px-[16px] md:px-[20px] py-[10px] md:py-[12px] flex items-center gap-[10px]
                     hover:bg-[#c8e8ff] transition-colors anim-fade-up"
          style={{ animationDelay: "900ms" }}
        >
          <span className="text-black text-[16px] leading-none">&#10022;</span>
          <span className="font-manrope text-black text-[12px] md:text-[13px] leading-[15.6px] uppercase tracking-wide">
            View My Work
          </span>
        </Link>

        <a
          href="mailto:sanketjamunde046@gmail.com"
          className="border border-[#AFDDFF] px-[16px] md:px-[20px] py-[10px] md:py-[12px] flex items-center
                     hover:bg-[#AFDDFF]/10 transition-colors anim-fade-up"
          style={{ animationDelay: "1000ms" }}
        >
          <span className="font-manrope text-[#AFDDFF] text-[12px] md:text-[13px] leading-[15.6px] uppercase tracking-wide">
            Contact Me
          </span>
        </a>
      </div>

      <div
        className="relative max-w-[280px] hidden sm:block anim-slide-right"
        style={{ animationDelay: "1100ms" }}
      >
        <span className="font-manrope text-black text-[13px] leading-[15.6px] bg-[#AFDDFF] px-[6px] py-[2px] inline-block mb-[10px]">
          LESS TALK — MORE ACTION
        </span>

        <div className="relative p-[20px]">
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 280 168"
            preserveAspectRatio="none"
          >
            <polygon
              points="0.5,0.5 279.5,0.5 279.5,167.5 30,167.5 0.5,137.5"
              fill="none"
              stroke="#AFDDFF"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <p className="relative font-manrope text-white text-[13px] leading-[18px] mb-[18px]">
            Computer Science student building modern websites and exploring
            intelligent automation — one project, one workflow at a time.
          </p>
          <a
            href="mailto:sanketjamunde046@gmail.com"
            className="relative block font-manrope text-[#AFDDFF] text-[13px] leading-[15.6px] cursor-pointer hover:underline"
          >
            VIEW_CONTACT_INFO
          </a>
        </div>
      </div>
    </div>
  );
}
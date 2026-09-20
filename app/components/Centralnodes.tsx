interface ConnectorLineProps {
  x1: string;
  y1: string;
  x2: string;
  y2: string;
  delay: number;
}

function ConnectorLine({ x1, y1, x2, y2, delay }: ConnectorLineProps) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none anim-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

const CONNECTORS: ConnectorLineProps[] = [
  { x1: "38%", y1: "14%", x2: "52%", y2: "14%", delay: 1200 },
  { x1: "52%", y1: "14%", x2: "60%", y2: "27%", delay: 1400 },
  { x1: "32%", y1: "58%", x2: "20%", y2: "74%", delay: 1500 },
  { x1: "20%", y1: "74%", x2: "6%", y2: "74%", delay: 1700 },
  { x1: "78%", y1: "53%", x2: "63%", y2: "53%", delay: 1800 },
  { x1: "63%", y1: "53%", x2: "50%", y2: "63%", delay: 2000 },
];

export default function CentralNodes() {
  return (
    <div className="absolute inset-0 pointer-events-none hidden md:block">
      {CONNECTORS.map((c, i) => (
        <ConnectorLine key={i} {...c} />
      ))}

      {/* CORE_ENTITY */}
      <div
        className="absolute top-[11%] left-[26%] anim-slide-left"
        style={{ animationDelay: "1100ms" }}
      >
        <span className="font-manrope text-white text-[13px] leading-[15.6px] whitespace-nowrap">
          [ WEB_DEVELOPMENT ]
        </span>
        <p className="font-manrope text-white/50 text-[11px] leading-[14px] mt-[4px] max-w-[160px]">
          Responsive, modern sites built with React &amp; Next.js.
        </p>
      </div>
      <div
        className="absolute top-[27%] left-[60%] w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border border-white/80 anim-scale-in"
        style={{ animationDelay: "1500ms" }}
      />

      {/* LUMINOUS_INSIGHT */}
      <div
        className="absolute top-[76%] left-[3%] anim-slide-left"
        style={{ animationDelay: "1400ms" }}
      >
        <span className="font-manrope text-white text-[13px] leading-[15.6px] whitespace-nowrap">
          [ AI_AUTOMATION ]
        </span>
        <p className="font-manrope text-white/50 text-[11px] leading-[14px] mt-[4px] max-w-[160px]">
          Automating repetitive tasks with AI-driven workflows.
        </p>
      </div>
      <div
        className="absolute top-[58%] left-[32%] w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border border-white/80 anim-scale-in"
        style={{ animationDelay: "1800ms" }}
      />

      {/* CONNECTIVITY */}
      <div
        className="absolute top-[50%] left-[78%] anim-slide-right"
        style={{ animationDelay: "1700ms" }}
      >
        <span className="font-manrope text-white text-[13px] leading-[15.6px] whitespace-nowrap">
          [ WHATSAPP_AUTOMATION ]
        </span>
        <p className="font-manrope text-white/50 text-[11px] leading-[14px] mt-[4px] max-w-[180px]">
          Automated WhatsApp workflows and communication systems.
        </p>
      </div>
      <div
        className="absolute top-[63%] left-[50%] w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border border-white/80 anim-scale-in"
        style={{ animationDelay: "2100ms" }}
      />
    </div>
  );
}
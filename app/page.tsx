import LumenHero from "./components/Lumenhero";

export default function LumenPage() {
  return (
    <main className="lumen-scope bg-[#071016] text-white">
      <LumenHero />

      <section id="about" className="border-t border-white/10 px-5 py-24 md:px-[10%] md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.4fr]">
          <p className="font-manrope text-xs uppercase tracking-[0.22em] text-[#AFDDFF]">01 / About</p>
          <div>
            <h2 className="font-graphik text-4xl leading-tight md:text-6xl">I build calm, useful digital systems.</h2>
            <p className="mt-8 max-w-2xl font-manrope text-base leading-7 text-white/65 md:text-lg">
              I am Sanket Jamunde, a web developer focused on thoughtful interfaces, reliable engineering, and automation that gives people their time back.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="border-t border-white/10 bg-[#0c171d] px-5 py-24 md:px-[10%] md:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="font-manrope text-xs uppercase tracking-[0.22em] text-[#AFDDFF]">02 / Skills</p>
          <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
            {[
              ["Frontend", "React, Next.js, TypeScript, responsive UI"],
              ["Automation", "AI workflows, WhatsApp systems, integrations"],
              ["Product thinking", "Clear flows, accessible interactions, measurable outcomes"],
            ].map(([title, description]) => (
              <article key={title} className="bg-[#0c171d] p-7 md:p-9">
                <h3 className="font-graphik text-2xl">{title}</h3>
                <p className="mt-5 font-manrope text-sm leading-6 text-white/60">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="border-t border-white/10 px-5 py-24 md:px-[10%] md:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="font-manrope text-xs uppercase tracking-[0.22em] text-[#AFDDFF]">03 / Projects</p>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <article className="border border-white/15 p-7 md:p-10">
              <p className="font-manrope text-xs text-white/45">01 / AUTOMATION</p>
              <h3 className="mt-14 font-graphik text-3xl">WhatsApp workflow systems</h3>
              <p className="mt-5 font-manrope text-sm leading-6 text-white/60">Structured conversations and automated handoffs for faster, more personal communication.</p>
            </article>
            <article className="border border-white/15 p-7 md:p-10">
              <p className="font-manrope text-xs text-white/45">02 / WEB DEVELOPMENT</p>
              <h3 className="mt-14 font-graphik text-3xl">Modern digital experiences</h3>
              <p className="mt-5 font-manrope text-sm leading-6 text-white/60">Fast, responsive websites that turn a clear idea into an experience people can use.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-[#AFDDFF] px-5 py-24 text-black md:px-[10%] md:py-32">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-manrope text-xs uppercase tracking-[0.22em] text-black/60">04 / Contact</p>
            <h2 className="mt-10 max-w-2xl font-graphik text-5xl leading-none md:text-7xl">Have a useful problem to solve?</h2>
          </div>
          <a className="break-words font-manrope text-sm uppercase tracking-[0.15em] underline underline-offset-8" href="mailto:sanketjamunde046@gmail.com">
            sanketjamunde046@gmail.com
          </a>
        </div>
      </section>
    </main>
  );
}
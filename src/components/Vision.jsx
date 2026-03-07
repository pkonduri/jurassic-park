import RevealSection from './RevealSection';
import SectionTag from './SectionTag';
import DNAHelix from './DNAHelix';

const pillars = [
  {
    color: 'amber',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d4943c" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
    title: 'De-Extinction Platform',
    desc: 'AI-powered DNA reconstruction from ancient genomes using modern avian relatives',
  },
  {
    color: 'green',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
    title: 'Living Encounters',
    desc: 'Premium experiences where people witness creatures extinct for millions of years',
  },
  {
    color: 'purple',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="1.5"><path d="M12 3v18M5.5 7.5l13 9M18.5 7.5l-13 9"/></svg>,
    title: 'Awe as a Service',
    desc: 'The antidote to the meaning crisis — humanity\'s most powerful emotion at scale',
  },
  {
    color: 'blue',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.5"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4"/></svg>,
    title: 'Deep Science IP',
    desc: 'Platform with applications across conservation, pharma, and materials science',
  },
];

const glyphBg = {
  amber: 'bg-[rgba(212,148,60,0.12)] border-[rgba(212,148,60,0.15)]',
  green: 'bg-[rgba(52,211,153,0.1)] border-[rgba(52,211,153,0.15)]',
  purple: 'bg-[rgba(122,0,223,0.1)] border-[rgba(122,0,223,0.15)]',
  blue: 'bg-[rgba(96,165,250,0.1)] border-[rgba(96,165,250,0.15)]',
};

export default function Vision() {
  return (
    <section id="vision" className="relative z-[1] py-32 px-5 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <RevealSection>
          <SectionTag label="The Vision" num="02" />
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] font-normal leading-[1.12] tracking-tight mb-5">
            What If We Could Bring<br/>Back the Impossible?
          </h2>
        </RevealSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-16">
          <RevealSection delay={0.1}>
            <p className="font-display text-[clamp(1.4rem,2.5vw,2rem)] font-normal leading-[1.45] italic mb-8">
              "Genesis is building the world's first <span className="text-gradient-amber">awe infrastructure company</span> — starting with de-extinction."
            </p>
            <p className="text-text-secondary text-[1rem] leading-relaxed mb-6">
              We use AI-powered computational paleogenomics and synthetic biology to bring back extinct species, and create immersive real-world experiences that restore humanity's sense of wonder.
            </p>
            <p className="text-text-secondary text-[1rem] leading-relaxed">
              This isn't science fiction. It's the convergence of mature gene editing, breakthrough AI for biology, and a world that desperately needs a reason to look up from the screen.
            </p>
          </RevealSection>

          <RevealSection delay={0.3}>
            <DNAHelix />
          </RevealSection>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {pillars.map((p, i) => (
            <RevealSection key={i} delay={i * 0.1}>
              <div className="glass rounded-2xl p-7 h-full hover:border-[rgba(212,148,60,0.2)] hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 border ${glyphBg[p.color]}`}>
                  {p.icon}
                </div>
                <h4 className="font-display text-[1.05rem] font-medium mb-2">{p.title}</h4>
                <p className="text-[0.85rem] text-text-secondary leading-relaxed">{p.desc}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

import RevealSection from './RevealSection';
import SectionTag from './SectionTag';

const phases = [
  {
    num: 'Phase 1', years: '2026 — 2027', name: 'Software Wedge', active: true,
    items: ['Paleogenomics AI platform', 'Ancient DNA reconstruction', 'First research partnerships', 'Seed funding'],
  },
  {
    num: 'Phase 2', years: '2028 — 2029', name: 'Lab to Life', active: false,
    items: ['First gene edits in avian embryos', 'Controlled trait expression', 'Series A/B funding', 'Bio-ethics board established'],
  },
  {
    num: 'Phase 3', years: '2030 — 2032', name: 'First Species', active: false,
    items: ['First de-extinct organism', 'Pilot habitat construction', 'Media/documentary launch', 'Regulatory milestones'],
  },
  {
    num: 'Phase 4', years: '2033+', name: 'Genesis Park', active: false,
    items: ['First public encounter facility', 'Multiple species programs', 'Global expansion', 'Platform licensing at scale'],
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative z-[1] py-32 px-5">
      <div className="max-w-[1200px] mx-auto">
        <RevealSection>
          <SectionTag label="Roadmap" num="06" />
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] font-normal leading-[1.12] tracking-tight mb-5">
            From Software to<br/>Living Wonders
          </h2>
        </RevealSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {phases.map((phase, i) => (
            <RevealSection key={i} delay={i * 0.1}>
              <div className={`glass rounded-2xl p-7 h-full relative overflow-hidden hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                phase.active ? 'border-amber-border' : 'hover:border-glass-border-hover'
              }`}>
                {phase.active && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[rgba(212,148,60,0.05)] to-transparent pointer-events-none" />
                )}
                <div className="relative">
                  <div className={`text-[0.68rem] font-bold tracking-[0.12em] uppercase mb-1 ${phase.active ? 'text-amber' : 'text-text-muted'}`}>
                    {phase.num}
                  </div>
                  <div className="font-display text-[1.6rem] font-semibold mb-1">{phase.years}</div>
                  <div className="font-display text-[1rem] font-medium italic text-amber-light mb-5">{phase.name}</div>
                  <ul className="flex flex-col gap-2 list-none">
                    {phase.items.map((item, j) => (
                      <li key={j} className="text-[0.82rem] text-text-secondary pl-4 relative leading-relaxed">
                        <span className={`absolute left-0 top-[0.45em] w-[5px] h-[5px] rounded-full ${
                          phase.active ? 'bg-amber shadow-[0_0_8px_rgba(212,148,60,0.5)]' : 'bg-text-muted'
                        }`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

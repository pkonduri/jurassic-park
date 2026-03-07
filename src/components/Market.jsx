import RevealSection from './RevealSection';
import SectionTag from './SectionTag';

const markets = [
  { value: '$8.3T', title: 'Experience Economy', desc: 'Theme parks, tourism, luxury travel, live events' },
  { value: '$1.2T', title: 'Synthetic Biology', desc: 'Gene editing, biotech platforms, pharmaceutical discovery' },
  { value: '$450B', title: 'Conservation & Climate', desc: 'Ecological restoration, carbon credits, biodiversity' },
];

export default function Market() {
  return (
    <section id="market" className="relative z-[1] py-32 px-5">
      <div className="max-w-[1200px] mx-auto">
        <RevealSection>
          <SectionTag label="Market Opportunity" num="04" />
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] font-normal leading-[1.12] tracking-tight mb-5">
            A New Category at the<br/>Intersection of Three Mega-Markets
          </h2>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
          {markets.map((m, i) => (
            <RevealSection key={i} delay={i * 0.1}>
              <div className="glass rounded-2xl p-10 text-center h-full hover:-translate-y-1.5 hover:border-glass-border-hover transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.08)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-10 h-[3px] rounded-full bg-gradient-to-r from-amber to-amber-bright mx-auto mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:w-16" />
                <div className="font-display text-[3.25rem] font-bold text-gradient-amber leading-tight">{m.value}</div>
                <h3 className="font-display text-[1.15rem] font-medium mt-3 mb-2">{m.title}</h3>
                <p className="text-[0.88rem] text-text-secondary leading-relaxed">{m.desc}</p>
              </div>
            </RevealSection>
          ))}
        </div>

        <RevealSection delay={0.4} className="mt-10">
          <div className="p-8 rounded-2xl text-center bg-gradient-to-br from-[rgba(212,148,60,0.08)] to-[rgba(122,0,223,0.04)] border border-amber-border">
            <p className="text-[1.1rem] text-text-primary font-light">
              Genesis TAM: <strong className="font-display text-[2rem] font-bold text-gradient-amber">$10B+</strong> in the first decade — growing as each new species and location comes online
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

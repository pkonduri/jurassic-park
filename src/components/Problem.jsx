import RevealSection from './RevealSection';
import SectionTag from './SectionTag';

const cards = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4943c" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'The Meaning Crisis',
    body: 'AI is automating millions of jobs. People are losing not just income — but identity and purpose. The question isn\'t "what will I do?" but "who will I be?"',
    stat: '300M+',
    statLabel: 'jobs at risk by 2030',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4943c" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: 'Attention Saturation',
    body: 'We have infinite content but zero awe. Screens numb rather than inspire. The dopamine treadmill keeps accelerating, but genuine wonder has become impossibly scarce.',
    stat: '60%',
    statLabel: 'of Gen Z feel purposeless',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4943c" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
    title: 'Experience Ceiling',
    body: 'Every safari, every theme park, every destination — explored. The world has been mapped, photographed, and catalogued. There\'s nothing left to discover.',
    stat: '$8.3T',
    statLabel: 'experience economy',
  },
];

export default function Problem() {
  return (
    <section id="problem" className="relative z-[1] py-32 px-5">
      <div className="max-w-[1200px] mx-auto">
        <RevealSection>
          <SectionTag label="The Problem" num="01" />
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] font-normal leading-[1.12] tracking-tight mb-5">
            Humanity Is Losing Its<br/>Sense of Wonder
          </h2>
          <p className="text-[1.05rem] text-text-secondary max-w-[600px] leading-relaxed font-light">
            AI is automating our jobs. Screens are numbing our senses. Every destination has been explored. The world needs something genuinely new.
          </p>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
          {cards.map((card, i) => (
            <RevealSection key={i} delay={i * 0.1}>
              <div className="cyber-corners glass rounded-2xl p-8 h-full hover:border-glass-border-hover hover:-translate-y-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group relative overflow-hidden"
                style={{ '--tw-shadow': 'none' }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 30px rgba(212,148,60,0.08), 0 20px 40px rgba(0,0,0,0.3)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = ''}>
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(212,148,60,0.2)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-[52px] h-[52px] rounded-[14px] bg-[rgba(212,148,60,0.12)] border border-[rgba(212,148,60,0.12)] flex items-center justify-center mb-6">
                  {card.icon}
                </div>
                <h3 className="font-display text-[1.35rem] font-medium mb-3">{card.title}</h3>
                <p className="text-text-secondary text-[0.92rem] leading-relaxed">{card.body}</p>
                <div className="mt-6 pt-6 border-t border-glass-border flex items-baseline gap-2.5">
                  <span className="font-display text-[2rem] font-bold text-gradient-amber">{card.stat}</span>
                  <span className="text-[0.78rem] text-text-muted">{card.statLabel}</span>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

import RevealSection from './RevealSection';
import SectionTag from './SectionTag';

const moats = [
  {
    iconBg: 'bg-[rgba(212,148,60,0.12)] border-[rgba(212,148,60,0.15)]',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d4943c" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
    title: 'Proprietary AI Platform',
    desc: 'First-mover in computational paleogenomics. Our models reconstruct ancient DNA with higher fidelity than any existing approach. Data flywheel improves with every genome.',
  },
  {
    iconBg: 'bg-[rgba(52,211,153,0.1)] border-[rgba(52,211,153,0.15)]',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: 'Regulatory & Ethics Lead',
    desc: 'Building relationships with regulatory bodies and ethics boards from day one. Early mover advantage in an industry that will require deep trust and compliance.',
  },
  {
    iconBg: 'bg-[rgba(212,148,60,0.12)] border-[rgba(212,148,60,0.15)]',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e8b164" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
    title: 'Emotional Monopoly',
    desc: 'Being first to bring back an extinct species creates a brand moat that is literally un-copyable — the "first on the moon" of biology.',
  },
  {
    iconBg: 'bg-[rgba(122,0,223,0.1)] border-[rgba(122,0,223,0.15)]',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="1.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>,
    title: 'Multi-Layered IP',
    desc: 'Patents on gene reconstruction algorithms, proprietary ancient genome database, synthetic biology protocols, and trade secrets in gestation technology.',
  },
];

export default function Moat() {
  return (
    <section className="relative z-[1] py-32 px-5">
      <div className="max-w-[1200px] mx-auto">
        <RevealSection>
          <SectionTag label="Competitive Moat" num="08" />
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] font-normal leading-[1.12] tracking-tight mb-5">
            Why Genesis Wins
          </h2>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-16">
          {moats.map((m, i) => (
            <RevealSection key={i} delay={i * 0.1}>
              <div className="glass rounded-2xl p-8 h-full hover:-translate-y-1 hover:border-glass-border-hover transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <h3 className="font-display text-[1.15rem] font-medium mb-3 flex items-center gap-3">
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 border ${m.iconBg}`}>
                    {m.icon}
                  </span>
                  {m.title}
                </h3>
                <p className="text-[0.9rem] text-text-secondary leading-relaxed">{m.desc}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

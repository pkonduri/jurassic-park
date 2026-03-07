import RevealSection from './RevealSection';
import SectionTag from './SectionTag';

const reasons = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d4943c" strokeWidth="1.5"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>,
    title: 'CRISPR Maturity',
    desc: 'Gene editing costs have dropped 99% in a decade. What was Nobel Prize-winning theory is now accessible lab technology.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d4943c" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
    title: 'AI for Biology',
    desc: 'AlphaFold proved AI can solve biology\'s hardest problems. The same approach applies to ancient DNA reconstruction.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d4943c" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
    title: 'Proven Precedent',
    desc: 'Colossal Biosciences raised $225M+ for mammoth de-extinction. The investment thesis is validated. The public appetite is real.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d4943c" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
    title: 'Cultural Moment',
    desc: 'AI displacement is creating an unprecedented demand for meaning, wonder, and experiences that feel genuinely new.',
  },
];

export default function WhyNow() {
  return (
    <section className="relative z-[1] py-32 px-5">
      <div className="max-w-[1200px] mx-auto">
        <RevealSection>
          <SectionTag label="Why Now" num="07" />
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] font-normal leading-[1.12] tracking-tight mb-5">
            The Convergence Window<br/>Is Open
          </h2>
          <p className="text-[1.05rem] text-text-secondary max-w-[600px] leading-relaxed font-light">
            Four independent breakthroughs have converged to make de-extinction not just possible — but inevitable.
          </p>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-16">
          {reasons.map((r, i) => (
            <RevealSection key={i} delay={i * 0.1}>
              <div className="glass rounded-2xl p-8 flex flex-col sm:flex-row gap-6 h-full hover:-translate-y-1 hover:border-glass-border-hover transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <div className="flex-shrink-0 w-14 h-14 rounded-[14px] bg-[rgba(212,148,60,0.12)] border border-[rgba(212,148,60,0.12)] flex items-center justify-center">
                  {r.icon}
                </div>
                <div>
                  <h3 className="font-display text-[1.2rem] font-medium mb-2">{r.title}</h3>
                  <p className="text-[0.9rem] text-text-secondary leading-relaxed">{r.desc}</p>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

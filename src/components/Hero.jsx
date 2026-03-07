import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function Hero() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative z-[1] min-h-screen flex flex-col justify-center items-center text-center px-5 pt-32 pb-24 overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-[10%] left-1/2 w-[800px] h-[800px] pointer-events-none"
        style={{
          transform: 'translateX(-50%)',
          background: 'radial-gradient(circle, rgba(212,148,60,0.07) 0%, rgba(122,0,223,0.03) 40%, transparent 70%)',
          animation: 'heroGlow 8s ease-in-out infinite',
        }}
      />

      <div className="relative z-[2] max-w-[900px]">
        {/* Eyebrow badge */}
        <motion.div
          {...fadeUp(0.3)}
          className="inline-flex items-center gap-2.5 px-5 py-2 glass rounded-full text-[0.72rem] font-semibold tracking-[0.12em] uppercase text-amber-light mb-10 border border-amber-border"
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-amber"
            style={{ animation: 'livePulse 2s ease-in-out infinite' }}
          />
          De-Extinction &amp; Awe Infrastructure
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.5)}
          className="font-display text-[clamp(3rem,7.5vw,6.5rem)] font-normal leading-[1.05] tracking-tight mb-7"
        >
          <span className="block">Restoring <em className="italic"><span className="shimmer">Wonder</span></em></span>
          <span className="block">to a World That</span>
          <span className="block">Needs It</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          {...fadeUp(0.7)}
          className="text-[clamp(1rem,1.8vw,1.25rem)] text-text-secondary max-w-[620px] mx-auto mb-11 leading-relaxed font-light"
        >
          We use computational paleogenomics and synthetic biology to bring back extinct species — and create experiences that make the world feel new again.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.9)} className="flex gap-4 justify-center items-center flex-wrap">
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, '#contact')}
            className="group inline-flex items-center gap-2.5 px-8 py-4 text-[0.88rem] font-semibold tracking-wide text-abyss bg-gradient-to-br from-amber to-amber-bright rounded-full no-underline hover:shadow-[0_16px_48px_rgba(212,148,60,0.4)] hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>Join the Mission</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="#vision"
            onClick={(e) => scrollTo(e, '#vision')}
            className="inline-flex items-center gap-2.5 px-8 py-4 text-[0.88rem] font-medium tracking-wide text-text-primary glass rounded-full no-underline border border-glass-border-hover hover:bg-[rgba(20,20,32,0.7)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Explore the Vision
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        {...fadeUp(1.4)}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-[2]"
      >
        <span className="text-[0.65rem] tracking-[0.2em] uppercase text-text-muted">Scroll to explore</span>
        <div className="w-px h-12 relative overflow-hidden bg-[rgba(255,255,255,0.06)]">
          <div
            className="absolute left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-amber"
            style={{ animation: 'scrollDown 2s ease-in-out infinite' }}
          />
        </div>
      </motion.div>
    </section>
  );
}

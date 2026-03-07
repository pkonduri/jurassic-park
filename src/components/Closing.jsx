import RevealSection from './RevealSection';
import SectionTag from './SectionTag';

export default function Closing() {
  return (
    <section id="contact" className="relative z-[1] text-center py-40 px-5 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[70%] bg-[radial-gradient(ellipse_at_50%_100%,rgba(212,148,60,0.06)_0%,rgba(122,0,223,0.02)_40%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-[2]">
        <RevealSection>
          <div className="flex justify-center mb-8">
            <SectionTag label="The Future" />
          </div>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-normal leading-[1.15] mb-6">
            AI is solving efficiency.<br/>
            We're solving <em className="italic"><span className="text-gradient-amber">meaning</span></em>.
          </h2>
          <p className="text-[1.15rem] text-text-secondary max-w-[580px] mx-auto leading-relaxed font-light">
            The world doesn't need another productivity tool — it needs a reason to look up from the screen.
          </p>
          <p className="font-display text-[1.5rem] italic text-text-primary mt-6 mb-14">
            We're starting with dinosaurs.
          </p>
        </RevealSection>

        <RevealSection delay={0.2}>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="mailto:pradhith.konduri@gmail.com"
              className="group inline-flex items-center gap-2.5 px-8 py-4 text-[0.88rem] font-semibold tracking-wide text-abyss bg-gradient-to-br from-amber to-amber-bright rounded-full no-underline hover:shadow-[0_16px_48px_rgba(212,148,60,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <span>Get in Touch</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2.5 px-8 py-4 text-[0.88rem] font-medium tracking-wide text-text-primary glass rounded-full no-underline border border-glass-border-hover hover:bg-[rgba(20,20,32,0.7)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Back to Top
            </a>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

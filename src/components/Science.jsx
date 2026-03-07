import RevealSection from './RevealSection';
import SectionTag from './SectionTag';

const steps = [
  {
    num: '01',
    title: 'Reconstruct',
    desc: 'AI models infer degraded ancient DNA from evolutionary relatives. Birds are living dinosaurs — our starting dataset.',
  },
  {
    num: '02',
    title: 'Edit',
    desc: 'CRISPR gene editing modifies modern avian genomes to express ancestral traits — size, teeth, scales.',
  },
  {
    num: '03',
    title: 'Gestate',
    desc: 'Synthetic biology and artificial wombs bring edited embryos to viability in controlled environments.',
  },
  {
    num: '04',
    title: 'Experience',
    desc: 'Living creatures housed in purpose-built ecosystems. Visitors encounter the impossible firsthand.',
  },
];

export default function Science() {
  return (
    <section id="science" className="relative z-[1] py-32 px-5">
      <div className="max-w-[1200px] mx-auto">
        <RevealSection>
          <SectionTag label="The Science" num="03" />
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] font-normal leading-[1.12] tracking-tight mb-5">
            From Ancient DNA<br/>to Living Creatures
          </h2>
          <p className="text-[1.05rem] text-text-secondary max-w-[600px] leading-relaxed font-light">
            A four-stage pipeline that turns computational paleogenomics into real, living organisms.
          </p>
        </RevealSection>

        <div className="relative mt-16">
          {/* Track line (desktop) */}
          <div className="hidden md:block absolute top-[26px] left-[5%] right-[5%] h-[2px] rounded-full opacity-20 bg-gradient-to-r from-amber via-green-life via-purple-soft to-amber-bright" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <RevealSection key={i} delay={i * 0.12}>
                <div className="text-center pt-16 relative">
                  {/* Node */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 z-[2]">
                    <div className="w-[52px] h-[52px] rounded-full bg-deep border-2 border-amber flex items-center justify-center font-display text-[1rem] font-semibold text-amber relative">
                      {step.num}
                      <div
                        className="absolute -inset-1.5 rounded-full border border-[rgba(212,148,60,0.15)]"
                        style={{ animation: 'nodeRing 3s ease-in-out infinite', animationDelay: `${i * 0.5}s` }}
                      />
                    </div>
                  </div>
                  <h3 className="font-display text-[1.3rem] font-medium mb-3">{step.title}</h3>
                  <p className="text-[0.88rem] text-text-secondary leading-relaxed max-w-[250px] mx-auto">{step.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>

        <RevealSection delay={0.5} className="mt-12">
          <div className="glass rounded-[14px] py-5 px-8 text-center border-amber-border">
            <p className="text-text-secondary text-[0.92rem]">
              <strong className="text-amber-light">Phase 1 MVP:</strong> Computational paleogenomics platform — AI-powered ancient DNA reconstruction software
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

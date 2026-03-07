import RevealSection from './RevealSection';
import SectionTag from './SectionTag';

const models = [
  { price: '$1K-$10K/person', title: 'Premium Experiences', desc: 'Living encounters, multi-day expeditions, intimate group experiences with de-extinct creatures' },
  { price: 'SaaS + Royalty', title: 'Platform Licensing', desc: 'License the paleogenomics AI platform to conservation orgs, pharma companies, and research labs' },
  { price: 'Multi-$B Potential', title: 'Media & IP', desc: 'Documentary series, educational content, brand partnerships — the most compelling content on Earth' },
  { price: 'Milestone Fees', title: 'Pharma Discovery', desc: 'Ancient organisms harbor undiscovered compounds. Partner with pharma for drug discovery pipelines' },
  { price: '$500-$5K/yr', title: 'Memberships', desc: 'Annual memberships with exclusive access, behind-the-scenes tours, and early access to new species' },
  { price: 'Contracts', title: 'Government & NGO', desc: 'Ecological restoration contracts, endangered species recovery programs, and conservation consulting' },
];

export default function Business() {
  return (
    <section className="relative z-[1] py-32 px-5">
      <div className="max-w-[1200px] mx-auto">
        <RevealSection>
          <SectionTag label="Business Model" num="05" />
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] font-normal leading-[1.12] tracking-tight mb-5">
            Multiple Revenue Engines,<br/>One Platform
          </h2>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
          {models.map((m, i) => (
            <RevealSection key={i} delay={(i % 3) * 0.1}>
              <div className="glass rounded-2xl p-8 h-full hover:-translate-y-1 hover:border-glass-border-hover transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <span className="inline-flex px-3 py-1 text-[1rem] font-semibold text-amber bg-[rgba(212,148,60,0.12)] border border-[rgba(212,148,60,0.15)] rounded-full mb-3 font-display">
                  {m.price}
                </span>
                <h3 className="font-display text-[1.2rem] font-medium mb-2">{m.title}</h3>
                <p className="text-[0.88rem] text-text-secondary leading-relaxed">{m.desc}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

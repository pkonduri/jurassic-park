import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const links = [
  { href: '#problem', label: 'Problem' },
  { href: '#vision', label: 'Vision' },
  { href: '#science', label: 'Science' },
  { href: '#market', label: 'Market' },
  { href: '#roadmap', label: 'Roadmap' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] flex justify-between items-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? 'py-3 px-8 bg-abyss/80 backdrop-blur-xl border-b border-glass-border'
          : 'py-5 px-8'
      }`}
    >
      <a href="#" onClick={(e) => scrollTo(e, '#home')} className="flex items-center gap-3 no-underline">
        <div className="w-9 h-9 rounded-full border-[1.5px] border-amber flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(212,148,60,0.15)_0%,transparent_70%)]" />
          <svg className="w-[18px] h-[18px] relative z-10" viewBox="0 0 24 24" fill="none" stroke="#d4943c" strokeWidth="1.5">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
            <path d="M12 6v12M8 8.5c0 0 1.5 2 4 2s4-2 4-2M8 15.5c0 0 1.5-2 4-2s4 2 4 2"/>
          </svg>
        </div>
        <span className="text-[0.85rem] font-bold tracking-[0.25em] uppercase text-text-primary">Genesis</span>
      </a>

      {/* Desktop */}
      <ul className="hidden md:flex gap-10 items-center list-none">
        {links.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              onClick={(e) => scrollTo(e, href)}
              className="text-text-secondary no-underline text-[0.78rem] font-medium tracking-[0.08em] uppercase hover:text-text-primary transition-colors relative group"
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, '#contact')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-[0.78rem] font-semibold tracking-[0.06em] uppercase text-abyss bg-gradient-to-br from-amber to-amber-bright rounded-full no-underline hover:shadow-[0_8px_32px_rgba(212,148,60,0.35)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Get in Touch
          </a>
        </li>
      </ul>

      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2"
        aria-label="Toggle navigation"
      >
        <span className={`w-[22px] h-[1.5px] bg-text-primary transition-all ${mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
        <span className={`w-[22px] h-[1.5px] bg-text-primary transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
        <span className={`w-[22px] h-[1.5px] bg-text-primary transition-all ${mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-abyss/95 backdrop-blur-xl border-b border-glass-border p-6 flex flex-col gap-4 md:hidden"
        >
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => scrollTo(e, href)}
              className="text-text-secondary no-underline text-sm font-medium tracking-wider uppercase hover:text-text-primary transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, '#contact')}
            className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-abyss bg-gradient-to-br from-amber to-amber-bright rounded-full no-underline mt-2"
          >
            Get in Touch
          </a>
        </motion.div>
      )}
    </nav>
  );
}

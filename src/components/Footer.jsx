export default function Footer() {
  return (
    <footer className="relative z-[1] py-10 px-5 border-t border-glass-border">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-5 text-center md:text-left">
        <div className="text-[0.85rem] font-bold tracking-[0.2em] uppercase text-text-muted">Genesis</div>
        <ul className="flex gap-8 list-none">
          {[
            { href: 'mailto:pradhith.konduri@gmail.com', label: 'Contact' },
            { href: '#vision', label: 'Vision' },
            { href: '#science', label: 'Science' },
            { href: '#roadmap', label: 'Roadmap' },
          ].map((link) => (
            <li key={link.label}>
              <a href={link.href} className="text-text-muted no-underline text-[0.8rem] tracking-wide hover:text-text-secondary transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="text-[0.75rem] text-text-muted">&copy; 2026 Genesis. Restoring wonder.</div>
      </div>
    </footer>
  );
}

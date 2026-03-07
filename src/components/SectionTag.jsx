export default function SectionTag({ label, num }) {
  return (
    <div className="inline-flex items-center gap-3 text-[0.7rem] font-bold tracking-[0.18em] uppercase text-amber mb-6">
      <span className="w-8 h-px bg-gradient-to-r from-amber to-transparent" />
      {label}
      {num && <span className="font-display text-[0.85rem] font-medium opacity-50">{num}</span>}
    </div>
  );
}

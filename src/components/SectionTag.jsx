export default function SectionTag({ label, num }) {
  return (
    <div className="inline-flex items-center gap-3 mb-6">
      {/* Left line with tick */}
      <div className="flex items-center gap-1">
        <div className="w-1 h-3 bg-amber opacity-60" />
        <div className="w-5 h-px bg-gradient-to-r from-amber to-amber/40" />
      </div>

      <span className="text-[0.68rem] font-bold tracking-[0.2em] uppercase text-amber">
        {label}
      </span>

      {num && (
        <>
          <div className="w-px h-3 bg-amber/30" />
          <span
            className="font-mono text-[0.65rem] font-medium tracking-[0.1em] text-amber/50"
            style={{ fontVariantNumeric: 'tabular-nums' }}
          >
            {num}
          </span>
        </>
      )}
    </div>
  );
}

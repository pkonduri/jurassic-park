export default function GlowSeparator() {
  return (
    <div className="relative z-[1] h-[160px] flex items-center justify-center overflow-hidden">
      {/* Central line with diamond node */}
      <div className="relative flex items-center justify-center w-full max-w-[400px]">
        {/* Left line */}
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[rgba(212,148,60,0.25)] to-[rgba(212,148,60,0.4)]" />

        {/* Center diamond node */}
        <div className="relative mx-3 flex items-center justify-center flex-shrink-0">
          <div className="w-2.5 h-2.5 border border-amber rotate-45 bg-transparent relative z-10"
            style={{ boxShadow: '0 0 10px rgba(212,148,60,0.5), 0 0 20px rgba(212,148,60,0.2)' }} />
          {/* Pulse ring */}
          <div className="absolute w-5 h-5 border border-amber/30 rotate-45"
            style={{ animation: 'nodeRing 2.5s ease-in-out infinite' }} />
          {/* Outer pulse ring */}
          <div className="absolute w-8 h-8 border border-amber/15 rotate-45"
            style={{ animation: 'nodeRing 2.5s ease-in-out infinite 0.4s' }} />
        </div>

        {/* Right line */}
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[rgba(212,148,60,0.25)] to-[rgba(212,148,60,0.4)]" />
      </div>

      {/* Ambient glow beneath */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[80px] bg-[radial-gradient(ellipse,rgba(212,148,60,0.06)_0%,transparent_70%)] pointer-events-none" />
    </div>
  );
}

export default function GlowSeparator() {
  return (
    <div className="relative z-[1] h-[200px] flex items-center justify-center overflow-hidden">
      <div className="w-[300px] h-[2px] bg-gradient-to-r from-transparent via-[rgba(212,148,60,0.3)] to-transparent rounded-full relative">
        <div className="absolute -top-[30px] left-1/2 -translate-x-1/2 w-[200px] h-[60px] bg-[radial-gradient(ellipse,rgba(212,148,60,0.08)_0%,transparent_70%)]" />
      </div>
    </div>
  );
}

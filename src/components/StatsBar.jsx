import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import RevealSection from './RevealSection';

function AnimatedNumber({ target, prefix = '', suffix = '', decimal = false, duration = 2200 }) {
  const [display, setDisplay] = useState(prefix + '0' + suffix);
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const start = performance.now();

    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const val = eased * target;
      setDisplay(prefix + (decimal ? val.toFixed(1) : Math.floor(val)) + suffix);
      if (progress < 1) requestAnimationFrame(tick);
      else setDisplay(prefix + (decimal ? target.toFixed(1) : target) + suffix);
    }

    requestAnimationFrame(tick);
  }, [inView, target, prefix, suffix, decimal, duration]);

  return <div ref={ref} className="font-display text-[2.75rem] font-bold text-gradient-amber leading-tight">{display}</div>;
}

const stats = [
  { target: 300, suffix: 'M+', label: 'Jobs at risk from AI by 2030' },
  { target: 60, suffix: '%', label: 'Of Gen Z report feeling purposeless' },
  { target: 8.3, prefix: '$', suffix: 'T', decimal: true, label: 'Global experience economy' },
];

export default function StatsBar() {
  return (
    <RevealSection className="relative z-[2] max-w-[960px] mx-auto -mt-12 px-4">
      <div className="glass-heavy rounded-[20px] grid grid-cols-1 md:grid-cols-3 p-6 md:p-9">
        {stats.map((s, i) => (
          <div
            key={i}
            className={`text-center px-6 py-4 md:py-0 ${
              i < stats.length - 1 ? 'md:border-r border-b md:border-b-0 border-glass-border pb-4 md:pb-0' : ''
            }`}
          >
            <AnimatedNumber
              target={s.target}
              prefix={s.prefix || ''}
              suffix={s.suffix || ''}
              decimal={s.decimal || false}
            />
            <div className="text-[0.78rem] text-text-secondary mt-1 tracking-wide">{s.label}</div>
          </div>
        ))}
      </div>
    </RevealSection>
  );
}

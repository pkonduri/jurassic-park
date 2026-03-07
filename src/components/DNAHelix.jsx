import { useEffect, useRef } from 'react';

export default function DNAHelix() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let time = 0;
    let animId;

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    }

    function draw() {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;
      const amp = Math.min(w, h) * 0.22;
      const span = h * 0.75;
      const steps = 80;

      // Ambient glow
      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, amp * 2);
      glow.addColorStop(0, 'rgba(212, 148, 60, 0.04)');
      glow.addColorStop(0.5, 'rgba(122, 0, 223, 0.02)');
      glow.addColorStop(1, 'transparent');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);

      const pairs = [];
      for (let i = 0; i < steps; i++) {
        const t = i / steps;
        const y = cy - span / 2 + t * span;
        const angle = t * Math.PI * 5 + time;
        pairs.push({
          y,
          x1: cx + Math.sin(angle) * amp,
          x2: cx + Math.sin(angle + Math.PI) * amp,
          z1: Math.cos(angle),
          z2: Math.cos(angle + Math.PI),
        });
      }

      // Rungs
      pairs.forEach((p, i) => {
        if (i % 5 === 0) {
          const grad = ctx.createLinearGradient(p.x1, p.y, p.x2, p.y);
          grad.addColorStop(0, `rgba(212, 148, 60, ${0.08 + Math.max(p.z1, 0) * 0.12})`);
          grad.addColorStop(0.5, 'rgba(122, 0, 223, 0.06)');
          grad.addColorStop(1, `rgba(52, 211, 153, ${0.08 + Math.max(p.z2, 0) * 0.12})`);
          ctx.beginPath();
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1;
          ctx.moveTo(p.x1, p.y);
          ctx.lineTo(p.x2, p.y);
          ctx.stroke();
        }
      });

      // Strands
      pairs.forEach(p => {
        const s1 = 2.5 + p.z1 * 2;
        const o1 = 0.3 + Math.max(p.z1, 0) * 0.5;
        if (s1 > 0.5) {
          ctx.beginPath();
          ctx.arc(p.x1, p.y, s1, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(212, 148, 60, ${o1})`;
          ctx.fill();
          if (o1 > 0.5) {
            ctx.beginPath();
            ctx.arc(p.x1, p.y, s1 * 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(212, 148, 60, ${o1 * 0.1})`;
            ctx.fill();
          }
        }

        const s2 = 2.5 + p.z2 * 2;
        const o2 = 0.3 + Math.max(p.z2, 0) * 0.5;
        if (s2 > 0.5) {
          ctx.beginPath();
          ctx.arc(p.x2, p.y, s2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(52, 211, 153, ${o2})`;
          ctx.fill();
          if (o2 > 0.5) {
            ctx.beginPath();
            ctx.arc(p.x2, p.y, s2 * 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(52, 211, 153, ${o2 * 0.1})`;
            ctx.fill();
          }
        }
      });

      time += 0.006;
      animId = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="relative h-[520px] rounded-[20px] overflow-hidden bg-card border border-glass-border">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}

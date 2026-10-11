"use client";
import { useEffect, useRef, useState } from "react";

const CHARS =
  "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ0123456789ABCDEF<>{}[]=/\\|";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const dropsRef = useRef<number[]>([]);
  const [mounted, setMounted] = useState(false);
  const [on, setOn] = useState(true);

  // Read persisted preference after mount (avoids hydration mismatch)
  useEffect(() => {
    try {
      if (localStorage.getItem("matrixRain") === "off") setOn(false);
    } catch {}
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    if (!on) {
      cancelAnimationFrame(rafRef.current);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }

    const FS = 18;
    const ACTIVE_RATIO = 0.38;
    const FRAME_INTERVAL = 90; // ms between drop advances (~11fps)
    let lastTime = 0;

    const setup = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const cols = Math.ceil(canvas.width / FS);
      dropsRef.current = Array.from({ length: cols }, () =>
        Math.random() < ACTIVE_RATIO
          ? Math.floor(Math.random() * (canvas.height / FS))
          : -1
      );
    };

    setup();
    window.addEventListener("resize", setup);

    const tick = (now: number) => {
      rafRef.current = requestAnimationFrame(tick);

      // Only advance drops every FRAME_INTERVAL ms
      if (now - lastTime < FRAME_INTERVAL) return;
      lastTime = now;

      const dark =
        document.documentElement.getAttribute("data-theme") !== "light";
      const drops = dropsRef.current;

      ctx.fillStyle = dark ? "rgba(0,0,0,0.07)" : "rgba(248,250,252,0.09)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${FS}px 'JetBrains Mono',monospace`;

      for (let i = 0; i < drops.length; i++) {
        if (drops[i] < 0) {
          // Dormant — wake up occasionally
          if (Math.random() < 0.003) drops[i] = 0;
          continue;
        }

        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const y = drops[i] * FS;

        // Bright lead character
        ctx.fillStyle = dark
          ? "rgba(210,255,210,0.95)"
          : "rgba(59,130,246,0.9)";
        ctx.fillText(char, i * FS, y);

        // One row back — dimmer trail
        if (y - FS > 0) {
          ctx.fillStyle = dark
            ? "rgba(34,197,94,0.55)"
            : "rgba(99,179,237,0.5)";
          ctx.fillText(
            CHARS[Math.floor(Math.random() * CHARS.length)],
            i * FS,
            y - FS
          );
        }

        if (y > canvas.height && Math.random() > 0.92) drops[i] = -1;
        else drops[i]++;
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", setup);
    };
  }, [on, mounted]);

  const toggle = () => {
    const next = !on;
    setOn(next);
    try {
      localStorage.setItem("matrixRain", next ? "on" : "off");
    } catch {}
  };

  if (!mounted) return null;

  return (
    <>
      <canvas ref={canvasRef} className="matrix-canvas" />
      <button
        className={`matrix-toggle${on ? " matrix-toggle--on" : ""}`}
        onClick={toggle}
        title={on ? "Disable Matrix Rain" : "Enable Matrix Rain"}
        aria-label={on ? "Disable Matrix Rain" : "Enable Matrix Rain"}
      >
        <span className="matrix-led" />
        {on ? "Matrix ON" : "Matrix OFF"}
      </button>
    </>
  );
}

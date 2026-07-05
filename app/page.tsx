"use client";

import { useEffect, useRef, useState } from "react";
import { CausticOverlay } from "@/app/components/CausticOverlay";

const STORAGE_KEY = "root_theme";
const TTL = 24 * 60 * 60 * 1000;

function getOrPickTheme(): number {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const { theme, ts } = JSON.parse(stored);
      if (Date.now() - ts < TTL) return theme;
    }
  } catch {}
  const theme = Math.random() < 0.5 ? 0 : 1;
  saveTheme(theme);
  return theme;
}

function saveTheme(theme: number) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ theme, ts: Date.now() }));
  } catch {}
}

// Durations and rotations per letter index so each floats at its own pace
const DUR  = [3.8, 4.3, 3.5, 4.7, 4.1, 3.6, 4.5, 3.9, 4.2, 3.7, 4.6, 3.4, 4.8, 3.3, 4.4];
const ROT  = [1.2, -1.5, 1.8, -1.1, 1.4, -1.7, 1.0, -1.3, 1.6, -1.2, 1.5, -1.8, 1.1, -1.4, 1.7];

function BuoyantText({ text, offset = 0, onClick }: { text: string; offset?: number; onClick?: () => void }) {
  return (
    <span className="block" onClick={onClick}>
      {text.split("").map((char, i) => {
        const idx = (i + offset) % DUR.length;
        return (
          <span
            key={i}
            style={{
              display: "inline-block",
              animationName: "buoyance",
              animationDuration: `${DUR[idx]}s`,
              animationDelay: `${-(idx * 0.31)}s`,
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
              animationDirection: idx % 2 === 0 ? "alternate" : "alternate-reverse",
              "--rot": `${ROT[idx]}deg`,
            } as React.CSSProperties}
          >
            {char === " " ? " " : char}
          </span>
        );
      })}
    </span>
  );
}

export default function Home() {
  const [theme, setTheme] = useState(0);
  const tapsRef = useRef<number[]>([]);

  useEffect(() => {
    setTheme(getOrPickTheme());
  }, []);

  const handleTap = () => {
    const now = Date.now();
    tapsRef.current = [...tapsRef.current, now].filter((t) => now - t < 2000);
    if (tapsRef.current.length >= 3) {
      tapsRef.current = [];
      setTheme((prev) => {
        const next = prev === 0 ? 1 : 0;
        saveTheme(next);
        return next;
      });
    }
  };

  if (theme === 1) {
    return (
      <main
        className="relative grid min-h-dvh place-items-center overflow-hidden px-6 text-center text-white"
        style={{
          background:
            "linear-gradient(to bottom, #6ecad8 0%, #1a5c7a 18%, #0a2e48 35%, #041828 55%, #020c18 75%, #010810 100%)",
        }}
      >
        <style>{`
          @keyframes buoyance {
            from { transform: translateY(0px) rotate(0deg); }
            to   { transform: translateY(-3px) rotate(var(--rot)); }
          }
        `}</style>
        <CausticOverlay />
        <h1
          className="relative max-w-6xl text-6xl font-black leading-none tracking-normal text-[#ff6fcf] sm:text-8xl lg:text-[9.5rem]"
          style={{
            zIndex: 7,
            textShadow:
              "0 0 40px rgba(160, 40, 255, 0.7), 0 0 100px rgba(120, 20, 200, 0.4), 0 0 200px rgba(80, 0, 160, 0.2)",
          }}
        >
          <BuoyantText text="van der" offset={0} />
          <BuoyantText text="Prutsers" offset={7} onClick={handleTap} />
        </h1>
      </main>
    );
  }

  return (
    <main className="glitch-scene grid min-h-dvh place-items-center overflow-hidden bg-[#130c24] px-6 text-center">
      <h1 className="glitch-title max-w-6xl text-6xl font-black leading-none tracking-normal text-[#ff6fcf] sm:text-8xl lg:text-[9.5rem]">
        <span className="block">van der</span>
        <span className="block select-none" onClick={handleTap}>
          Prutsers
        </span>
        <span className="word-pixels" aria-hidden="true">
          van der
          <br />
          Prutsers
        </span>
      </h1>
    </main>
  );
}

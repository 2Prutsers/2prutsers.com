"use client";

import { useEffect } from "react";

// #6ecad8 → #010810
const TOP = [110, 202, 216];
const BTM = [1, 8, 16];

function lerp(a: number[], b: number[], t: number) {
  return a.map((v, i) => Math.round(v + (b[i] - v) * t));
}

export function OverscrollFix() {
  useEffect(() => {
    const update = () => {
      const scrollY = window.scrollY ?? document.documentElement.scrollTop;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const t = max > 0 ? Math.min(1, scrollY / max) : 0;
      const [r, g, b] = lerp(TOP, BTM, t);
      const color = `rgb(${r},${g},${b})`;
      document.body.style.background = color;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    document.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      document.removeEventListener("scroll", update);
    };
  }, []);
  return null;
}

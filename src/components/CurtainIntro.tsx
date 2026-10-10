"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { BRAND_ASSETS } from "@/data/assets";

export function CurtainIntro() {
  const [curtainState, setCurtainState] = useState<"hidden" | "visible" | "animating">("hidden");

  useEffect(() => {
    // Check if user already saw the curtain in this session or prefers reduced motion
    const hasSeenCurtain = sessionStorage.getItem("berryque_curtain_viewed");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (hasSeenCurtain || prefersReducedMotion) {
      return;
    }

    sessionStorage.setItem("berryque_curtain_viewed", "true");

    // Start by showing curtain
    const showTimer = setTimeout(() => {
      setCurtainState("visible");
    }, 10);

    // After brief display, slide curtain upward
    const animTimer = setTimeout(() => {
      setCurtainState("animating");
    }, 700);

    // Unmount curtain after upward animation completes
    const hideTimer = setTimeout(() => {
      setCurtainState("hidden");
    }, 1600);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(animTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (curtainState === "hidden") return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F8F3EB] pointer-events-none transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
        curtainState === "animating" ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="flex flex-col items-center text-center px-6">
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-4 rounded-full overflow-hidden border-2 border-[#79543A]/40 shadow-md bg-[#38271F]">
          <Image
            src={BRAND_ASSETS.logoImage}
            alt="Berry Que Café Logo"
            fill
            className="object-cover"
          />
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.2em] text-[#38271F] uppercase mb-1">
          {BRAND_ASSETS.logoText}
        </h1>
        <p className="text-xs sm:text-sm tracking-[0.35em] text-[#79543A] uppercase font-medium">
          {BRAND_ASSETS.logoSubtext}
        </p>
        <div className="w-12 h-0.5 bg-[#79543A]/40 mt-4 tracking-widest" />
        <p className="text-xs text-[#6B5D55] mt-4 tracking-wider">
          Digital Catalogue
        </p>
      </div>
    </div>
  );
}

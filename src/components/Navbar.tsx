"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavbarProps {
  activePage?: "home" | "menu";
}

export function Navbar({ activePage }: NavbarProps) {
  const pathname = usePathname();
  const isMenuPage = activePage === "menu" || pathname === "/menu";

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F8F3EB]/95 backdrop-blur-md border-b border-[#79543A]/15 transition-all shadow-2xs">
      <div className="max-w-6xl w-full mx-auto px-3 sm:px-6 h-[76px] sm:h-[100px] flex items-center justify-between gap-2 sm:gap-4 box-border">
        {/* Brand Logo - High prominence transparent Berry Que Café emblem artwork */}
        <Link 
          href="/" 
          className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#79543A] rounded py-1 shrink-0"
          aria-label="Berry Que Café Home"
        >
          <div className="relative h-[56px] sm:h-[76px] w-auto max-w-[220px] sm:max-w-[280px] shrink-0 flex items-center">
            <Image
              src="/images/berry-que-logo.png"
              alt="Berry Que Café Logo"
              width={280}
              height={76}
              priority
              className="h-[56px] sm:h-[76px] w-auto max-w-[220px] sm:max-w-[280px] object-contain shrink-0 block transition-transform group-hover:scale-[1.02]"
            />
          </div>
        </Link>

        {/* Navigation Link: Contextual Route-Based Button */}
        <nav className="flex items-center gap-1.5 sm:gap-3 shrink-0" aria-label="Main Navigation">
          {isMenuPage ? (
            <Link
              href="/"
              className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-[#E5D2B8] text-[#38271F] hover:bg-white transition-all shadow-xs whitespace-nowrap"
            >
              ← Home
            </Link>
          ) : (
            <Link
              href="/menu"
              className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-[#79543A] text-[#F8F3EB] hover:bg-[#63432D] transition-all shadow-sm whitespace-nowrap"
            >
              Browse Menu →
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}

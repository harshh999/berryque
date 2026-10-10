import Image from "next/image";
import { BRAND_ASSETS } from "@/data/assets";

export function Footer() {
  return (
    <footer className="w-full bg-[#38271F] text-[#F8F3EB] border-t border-[#79543A]/20 py-10 sm:py-12 mt-16 sm:mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 sm:mb-10">
          {/* Cafe Brand & Description */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="relative w-10 h-10 shrink-0 rounded-full overflow-hidden border border-[#E5D2B8]/30 bg-[#38271F]">
                <Image
                  src={BRAND_ASSETS.logoImage}
                  alt="Berry Que Café Logo"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <span className="font-serif tracking-widest text-xl font-bold uppercase block text-[#F8F3EB] leading-tight">
                  {BRAND_ASSETS.logoText}
                </span>
                <span className="text-[11px] tracking-[0.25em] text-[#E5D2B8] font-medium uppercase block leading-tight">
                  {BRAND_ASSETS.logoSubtext}
                </span>
              </div>
            </div>
            <p className="text-[#E5D2B8]/80 text-xs sm:text-sm leading-relaxed max-w-md">
              {BRAND_ASSETS.tagline} A sanctuary for artisanal flavors and freshly prepared cafe culinary delights.
            </p>
          </div>

          {/* Digital Catalogue Information */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-[#E5D2B8] mb-2">
              Digital Catalogue
            </h4>
            <p className="text-xs text-[#E5D2B8]/75 leading-relaxed max-w-md">
              This digital catalogue is provided for in-cafe browsing and exploration of our complete menu offerings, serving details, and prices.
            </p>
            <div className="mt-3 inline-block px-3 py-1 rounded bg-[#79543A]/50 border border-[#E5D2B8]/20 text-[11px] text-[#E5D2B8] font-medium">
              Browse-Only Menu • All Prices in INR (₹)
            </div>
          </div>
        </div>

        {/* Copyright & Agency Credit Footer Bottom */}
        <div className="pt-6 border-t border-[#79543A]/30 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs text-[#E5D2B8]/70">
          <p>© 2026 {BRAND_ASSETS.cafeName}. All rights reserved.</p>
          <a
            href="https://lazlle.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] sm:text-xs text-[#E5D2B8]/80 hover:text-[#F8F3EB] transition-colors underline decoration-[#79543A]/60 hover:decoration-[#E5D2B8] font-medium"
          >
            Crafted by Lazlle &amp; Co.
          </a>
        </div>
      </div>
    </footer>
  );
}

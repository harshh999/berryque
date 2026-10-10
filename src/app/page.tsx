import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, Sparkles, MapPin } from "lucide-react";
import { BRAND_ASSETS, CATEGORY_BANNERS } from "@/data/assets";
import { MENU_CATEGORIES } from "@/data/menu";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GoogleReviews, BusinessInfo, CafeExperience } from "@/components/BusinessInfo";

export const metadata = {
  title: "Berry Que Café 2.0 | Digital Cafe Menu & Catalogue",
  description:
    "Explore the complete artisanal digital menu of Berry Que Café 2.0. Discover delicious starters, pizzas, pastas, burgers, khichdi, beverages, and desserts.",
};

export default function HomePage() {
  const featuredCategories = MENU_CATEGORIES.slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F3EB] text-[#38271F] w-full max-w-full overflow-x-clip">
      <Navbar activePage="home" />

      <main className="flex-1 w-full max-w-full overflow-x-clip">
        {/* Editorial Text-First Hero Section & Storefront Visual */}
        <section className="relative w-full pt-6 pb-8 sm:pt-12 sm:pb-14 px-5 sm:px-6">
          <div className="max-w-[1200px] w-full mx-auto flex flex-col gap-6 sm:gap-10">
            
            {/* Hero Editorial Introduction */}
            <div className="flex flex-col items-start text-left max-w-[850px] w-full">
              {/* 1. Eyebrow */}
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#79543A] font-bold mb-3 pt-7 sm:pt-8">
                ARTISANAL CAFÉ EXPERIENCE
              </p>

              {/* 2. Headline */}
              <h1 className="font-serif text-[clamp(34px,8vw,46px)] sm:text-[clamp(48px,5vw,72px)] font-bold text-[#38271F] tracking-tight leading-[1.05] max-w-[850px] mb-3.5">
                A sanctuary for comforting bites &amp; crafted beverages.
              </h1>

              {/* 3. Description */}
              <p className="text-base text-[#6B5D55] max-w-[540px] leading-relaxed mb-5">
                Browse our in-house menu featuring 21 categories with clear serving details and prices.
              </p>

              {/* 4. Primary CTA */}
              <div className="w-full sm:w-auto mb-3">
                <Link
                  href="/menu"
                  className="w-full sm:w-[240px] inline-flex items-center justify-center gap-2.5 px-7 rounded-xl bg-[#79543A] text-[#F8F3EB] font-bold text-base hover:bg-[#63432D] active:scale-[0.98] transition-all shadow-md h-[52px]"
                >
                  <span>Explore Menu</span>
                  <ArrowRight className="w-4 h-4 text-[#E5D2B8]" />
                </Link>
              </div>

              {/* 5. Supporting note */}
              <p className="text-[13px] sm:text-sm text-[#79543A]/80 font-normal tracking-wide">
                Made fresh. Served with love.
              </p>
            </div>

            {/* Storefront Image Card (Separate Image Element) */}
            <div className="relative w-full rounded-[16px] sm:rounded-[20px] overflow-hidden border border-[#79543A]/30 shadow-md bg-[#E5D2B8] aspect-[4/3] sm:aspect-[16/7]">
              <Image
                src="/images/berry-que-storefront.jpg"
                alt="Berry Que Café 2.0 Storefront & Signage"
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                priority
                className="object-cover object-center"
              />
            </div>

          </div>
        </section>

        {/* Featured Categories Showcase */}
        <section className="py-6 px-5 sm:py-[48px] sm:pb-[36px] bg-[#F2E8DC]/50 border-y border-[#79543A]/15">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-7 sm:mb-[28px] gap-4">
              <div className="flex flex-col items-start text-left">
                <span className="text-[11px] sm:text-xs font-medium tracking-[0.12em] text-[#79543A] uppercase mb-[12px]">
                  A TASTE OF BERRY QUE
                </span>
                <h2 className="text-[clamp(32px,7vw,36px)] sm:text-[clamp(44px,4vw,52px)] font-serif font-semibold text-[#38271F] leading-[1.1] tracking-[-0.025em] mb-[10px]">
                  Something for every craving.
                </h2>
                <p className="text-sm sm:text-base text-[#79543A] leading-[1.65] max-w-[440px]">
                  From comfort-food classics to little indulgences, find your kind of delicious.
                </p>
              </div>
              <Link
                href="/menu"
                className="inline-flex items-center gap-1.5 text-sm sm:text-[15px] font-medium text-[#79543A] hover:text-[#38271F] transition-colors mt-[18px] sm:mt-0"
              >
                <span>Explore all 21 categories</span>
                <ArrowUpRight className="w-4 h-4 text-[#79543A]" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {featuredCategories.map((cat) => {
                const banner = CATEGORY_BANNERS[cat.id];
                return (
                  <Link
                    key={cat.id}
                    href={`/menu#${cat.id}`}
                    className="group flex flex-col bg-white rounded-xl overflow-hidden border border-[#79543A]/15 hover:border-[#79543A]/40 transition-all shadow-2xs hover:shadow-md"
                  >
                    <div className="relative w-full aspect-[4/3] bg-[#E5D2B8] overflow-hidden">
                      {banner && (
                        <Image
                          src={banner.imageSrc || banner.bannerUrl || "/images/berry-que-storefront.jpg"}
                          alt={banner.alt || cat.name}
                          fill
                          sizes="(max-width: 640px) 50vw, 200px"
                          style={{ objectPosition: banner.objectPosition || "center 50%" }}
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                    </div>
                    <div className="p-2.5 flex items-center justify-between text-center">
                      <span className="text-xs font-semibold text-[#38271F] group-hover:text-[#79543A] transition-colors line-clamp-1">
                        {cat.name}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Photo-Led Café Experience Section */}
        <CafeExperience />

        {/* Google Reviews Section */}
        <GoogleReviews />

        {/* Compact Opening Hours & Phone Information */}
        <BusinessInfo />
      </main>

      <Footer />
    </div>
  );
}

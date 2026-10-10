"use client";

import Image from "next/image";
import { Star, ExternalLink, Clock, Phone, MapPin } from "lucide-react";

interface Review {
  reviewer: string;
  rating: number;
  excerpt: string;
  theme: string;
}

const REVIEWS: Review[] = [
  {
    reviewer: "Karan Chauhan",
    rating: 5,
    excerpt: "The place has a cozy and chill vibe, perfect for hanging out with friends or even a casual date.",
    theme: "Ambience"
  },
  {
    reviewer: "Danish Belim",
    rating: 5,
    excerpt: "Absolutely loved this pet-friendly cafe! The atmosphere is warm, cozy, and perfect for spending time with your furry friend.",
    theme: "Pet-friendly experience"
  },
  {
    reviewer: "Khushi Kapoor",
    rating: 5,
    excerpt: "The food is delicious, presentation is amazing, and the ambience is cozy and welcoming.",
    theme: "Food and ambience"
  },
  {
    reviewer: "Payal Thakur",
    rating: 5,
    excerpt: "The food was fresh, delicious, and beautifully presented. The ambience is cozy and perfect for spending quality time with friends and family.",
    theme: "Food quality"
  },
  {
    reviewer: "Deepaben Shah",
    rating: 5,
    excerpt: "We booked a kitty party at Berry Que Cafe 2.0. I loved the food, the staff was very polite, and we all enjoyed ourselves.",
    theme: "Group dining"
  }
];

const SCHEDULE = [
  { day: "Monday", hours: "11:00 AM – 7:00 AM (next day)" },
  { day: "Tuesday", hours: "11:00 AM – 7:00 AM (next day)" },
  { day: "Wednesday", hours: "11:00 AM – 7:00 AM (next day)" },
  { day: "Thursday", hours: "11:00 AM – 7:00 AM (next day)" },
  { day: "Friday", hours: "11:00 AM – 7:00 AM (next day)" },
  { day: "Saturday", hours: "11:00 AM – 7:00 AM (next day)" },
  { day: "Sunday", hours: "11:00 AM – 7:00 AM (next day)" }
];

export function GoogleReviews() {
  return (
    <section className="py-12 sm:py-16 bg-[#F8F3EB] border-t border-[#79543A]/15">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6">
          <div className="flex flex-col items-start text-left max-w-xl">
            <div className="inline-flex items-center gap-2 mb-2">
              {/* Google G Logo Badge */}
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span className="text-xs font-semibold tracking-wider text-[#79543A] uppercase">
                Google Reviews
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#38271F] tracking-tight mb-2">
              Loved by Our Guests
            </h2>
            <p className="text-sm sm:text-base text-[#6B5D55] leading-relaxed">
              A little love from the people who make Berry Que special.
            </p>
          </div>

          {/* Rating Summary & Action Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white/80 p-4 rounded-xl border border-[#79543A]/15 backdrop-blur-xs">
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-bold text-[#38271F]">4.9</span>
                <div className="flex items-center gap-0.5 text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-[#F59E0B]" />
                  ))}
                </div>
              </div>
              <span className="text-xs text-[#79543A]/80 font-medium mt-0.5">
                4.9 / 5 based on 157 Google reviews
              </span>
            </div>
            <a
              href="https://share.google/Nbud6Ik0oWi9HPhYP"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#79543A] text-[#F8F3EB] text-xs sm:text-sm font-semibold hover:bg-[#63432D] transition-all shadow-2xs whitespace-nowrap"
            >
              <span>Read All Google Reviews</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-white p-5 rounded-xl border border-[#79543A]/15 shadow-2xs hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#EAD7BD] flex items-center justify-center text-[#79543A] font-bold text-xs">
                      {rev.reviewer.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#38271F] line-clamp-1">{rev.reviewer}</h4>
                      <span className="text-[11px] text-[#79543A]/70">{rev.theme}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5 text-[#F59E0B]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current text-[#F59E0B]" />
                    ))}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#6B5D55] leading-relaxed italic">
                  &ldquo;{rev.excerpt}&rdquo;
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#79543A]/10 flex items-center justify-between text-[11px] text-[#79543A]/60">
                <span className="flex items-center gap-1 font-medium">
                  <svg className="w-3 h-3" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  Google Review
                </span>
                <span>Verified Guest Excerpt</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CafeExperience() {
  return (
    <section className="py-12 sm:py-16 bg-[#F8F3EB] border-t border-[#79543A]/15">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Text Column */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="text-[11px] sm:text-xs font-medium tracking-[0.12em] text-[#79543A] uppercase mb-2">
              OUR AMBIENCE &amp; VIBE
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#38271F] leading-tight mb-3">
              More Than Just Coffee
            </h2>
            <p className="text-base text-[#6B5D55] leading-relaxed mb-6">
              A cozy spot for good food, great company, and late-night cravings.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="p-3.5 rounded-xl bg-white/70 border border-[#79543A]/15">
                <h4 className="text-sm font-bold text-[#38271F] mb-1">Cozy Ambience</h4>
                <p className="text-xs text-[#6B5D55] leading-snug">Warm, welcoming seating for casual dates and relaxed hangs.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/70 border border-[#79543A]/15">
                <h4 className="text-sm font-bold text-[#38271F] mb-1">Pet-Friendly</h4>
                <p className="text-xs text-[#6B5D55] leading-snug">Bring your furry friends along for coffee &amp; comfort bites.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/70 border border-[#79543A]/15">
                <h4 className="text-sm font-bold text-[#38271F] mb-1">Café Specials</h4>
                <p className="text-xs text-[#6B5D55] leading-snug">Artisanal beverages, pizzas, burgers, and indulgence desserts.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/70 border border-[#79543A]/15">
                <h4 className="text-sm font-bold text-[#38271F] mb-1">Group Gatherings</h4>
                <p className="text-xs text-[#6B5D55] leading-snug">Perfect space for kitties, celebrations, &amp; friends&apos; hangouts.</p>
              </div>
            </div>
          </div>

          {/* Asymmetrical Photo Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-4">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#79543A]/20 shadow-sm bg-[#E5D2B8]">
              <Image
                src="/images/hero-cafe-food.webp"
                alt="Berry Que Cafe Table Spread"
                fill
                sizes="(max-width: 768px) 50vw, 400px"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="grid grid-rows-2 gap-3 sm:gap-4">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[#79543A]/20 shadow-sm bg-[#E5D2B8]">
                <Image
                  src="/images/sandwiches.webp"
                  alt="Artisanal Sandwich & Coffee"
                  fill
                  sizes="(max-width: 768px) 50vw, 400px"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[#79543A]/20 shadow-sm bg-[#E5D2B8]">
                <Image
                  src="/images/mocktails.webp"
                  alt="Refreshing Cold Drinks"
                  fill
                  sizes="(max-width: 768px) 50vw, 400px"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BusinessInfo() {
  return (
    <section className="py-8 sm:py-12 bg-[#F2E8DC]/50 border-t border-[#79543A]/15">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        <div className="p-5 sm:p-6 rounded-2xl bg-white/70 border border-[#79543A]/15 backdrop-blur-xs flex flex-col md:flex-row md:items-start justify-between gap-6 sm:gap-8">
          
          {/* Row 1: Opening Hours Group */}
          <div className="flex items-start gap-4 text-left flex-1 min-w-0">
            <div className="w-12 h-12 rounded-full bg-[#EAD7BD] flex items-center justify-center text-[#79543A] shrink-0">
              <Clock className="w-5 h-5 text-[#79543A]" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-sm sm:text-[15px] font-semibold text-[#79543A] uppercase tracking-wider block mb-0.5">
                OPENING HOURS
              </span>
              <p className="text-[17px] sm:text-lg font-semibold text-[#38271F] font-sans leading-snug">
                11:00 AM – 7:00 AM <span className="font-normal text-[#79543A] text-sm">(Next Day)</span>
              </p>
              <p className="text-sm sm:text-[15px] text-[#6B5D55] font-normal leading-[1.5] mt-0.5">
                Daily late-night continuous service
              </p>
            </div>
          </div>

          {/* Vertical Divider on desktop */}
          <div className="hidden md:block w-px h-16 bg-[#79543A]/20 shrink-0 self-center" />

          {/* Row 2: Contact Phone Link Group */}
          <div className="flex items-start gap-4 text-left flex-1 min-w-0">
            <div className="w-12 h-12 rounded-full bg-[#EAD7BD] flex items-center justify-center text-[#79543A] shrink-0">
              <Phone className="w-5 h-5 text-[#79543A]" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-sm sm:text-[15px] font-semibold text-[#79543A] uppercase tracking-wider block mb-0.5">
                CALL THE CAFÉ
              </span>
              <a
                href="tel:+917984373123"
                className="text-[17px] sm:text-lg font-semibold text-[#38271F] font-sans hover:text-[#79543A] transition-colors leading-snug inline-block w-fit"
              >
                +91 79843 73123
              </a>
              <p className="text-sm sm:text-[15px] text-[#6B5D55] font-normal leading-[1.5] mt-0.5">
                Table inquiries &amp; takeaway pre-orders
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

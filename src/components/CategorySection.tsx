"use client";

import { useState } from "react";
import Image from "next/image";
import { MenuCategory } from "@/types/menu";
import { CATEGORY_BANNERS, DEFAULT_CATEGORY_FALLBACK } from "@/data/assets";
import { MenuItemCard } from "./MenuItemCard";

interface CategorySectionProps {
  category: MenuCategory;
  index: number;
}

export function CategorySection({ category, index }: CategorySectionProps) {
  const [imageError, setImageError] = useState(false);
  const bannerAsset = CATEGORY_BANNERS[category.id] || DEFAULT_CATEGORY_FALLBACK;
  const imageSource = imageError
    ? DEFAULT_CATEGORY_FALLBACK.imageSrc
    : bannerAsset.imageSrc || bannerAsset.bannerUrl || DEFAULT_CATEGORY_FALLBACK.imageSrc;
  const imageAlt = bannerAsset.alt || bannerAsset.altText || category.name;
  const objectPos = bannerAsset.objectPosition || "center 50%";

  return (
    <section
      id={category.id}
      className="category-section-anchor mb-8 sm:mb-12 scroll-mt-24"
      aria-labelledby={`heading-${category.id}`}
    >
      {/* Category Wide Photographic Banner - Compact Height on Mobile */}
      <div className="relative w-full h-32 sm:h-44 md:h-56 rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-5 border border-[#79543A]/20 bg-[#E5D2B8] shadow-xs">
        <Image
          src={imageSource}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
          style={{ objectPosition: objectPos }}
          className="object-cover transition-transform duration-700 hover:scale-105"
          priority={index < 2}
          onError={() => setImageError(true)}
        />

        {/* Gradient Overlay for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#38271F]/90 via-[#38271F]/40 to-transparent flex flex-col justify-end p-3 sm:p-5 md:p-6 min-w-0 box-border">
          <h2
            id={`heading-${category.id}`}
            className="text-lg sm:text-3xl md:text-4xl font-serif font-bold text-[#F8F3EB] tracking-tight drop-shadow-sm leading-tight truncate min-w-0"
          >
            {category.name}
          </h2>
          {category.pricing_labels && (
            <div className="flex items-center gap-1 sm:gap-1.5 mt-1 sm:mt-1.5 flex-wrap min-w-0">
              <span className="text-[9px] sm:text-xs text-[#E5D2B8]/90 font-medium shrink-0">Available:</span>
              {category.pricing_labels.map((label) => (
                <span
                  key={label}
                  className="text-[9px] sm:text-[11px] bg-[#F8F3EB]/25 text-[#F8F3EB] px-1.5 py-0.2 rounded backdrop-blur-xs font-semibold whitespace-nowrap"
                >
                  {label}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Render Direct Items (if no subcategories) */}
      {category.items && category.items.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3.5">
          {category.items.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      )}

      {/* Render Subcategories (if present) */}
      {category.subcategories && category.subcategories.length > 0 && (
        <div className="space-y-4 sm:space-y-6">
          {category.subcategories.map((subcat) => (
            <div key={subcat.name} className="space-y-2 sm:space-y-2.5">
              <div className="flex items-center gap-2 pb-1 border-b border-[#79543A]/15">
                <div className="w-1.5 h-1.5 rounded-full bg-[#79543A]" />
                <h3 className="text-xs sm:text-sm font-bold text-[#38271F] uppercase tracking-wider">
                  {subcat.name}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3.5">
                {subcat.items.map((item) => (
                  <MenuItemCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

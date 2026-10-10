"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { MENU_CATEGORIES } from "@/data/menu";
import { UtensilsCrossed, X, ChevronRight } from "lucide-react";

export function CategoryNavPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState<string>("");
  const [showTopFade, setShowTopFade] = useState(false);
  const [showBottomFade, setShowBottomFade] = useState(true);
  const popupRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Dynamic total item count across all 21 categories
  const totalItemCount = useMemo(() => {
    return MENU_CATEGORIES.reduce((total, cat) => {
      if (cat.items) return total + cat.items.length;
      if (cat.subcategories) {
        return total + cat.subcategories.reduce((subTotal, sub) => subTotal + sub.items.length, 0);
      }
      return total;
    }, 0);
  }, []);

  // Close on Escape key press & handle click outside
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        popupRef.current &&
        !popupRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
    setShowTopFade(scrollTop > 0);
    setShowBottomFade(Math.ceil(scrollTop + clientHeight) < scrollHeight);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(handleScroll, 50);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Track active category using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategoryId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -65% 0px",
      }
    );

    MENU_CATEGORIES.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleCategorySelect = (categoryId: string) => {
    setIsOpen(false);
    const element = document.getElementById(categoryId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside aria-label="Quick Category Navigation">
      {/* Floating Trigger Button - Clear of safe-area bottom */}
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-controls="category-nav-dialog"
        className="fixed bottom-4 sm:bottom-6 right-3 sm:right-6 z-40 flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-3 bg-[#38271F] text-[#F8F3EB] rounded-full shadow-xl hover:bg-[#79543A] active:scale-95 transition-all duration-200 border border-[#E5D2B8]/30 min-h-[40px] sm:min-h-[44px] min-w-[40px] sm:min-w-[44px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#79543A]"
        aria-label="Open Category Navigation Menu"
      >
        <UtensilsCrossed className="w-4 h-4 text-[#E5D2B8]" />
        <span className="text-xs sm:text-sm font-semibold tracking-wide">Menu</span>
        <span className="text-[10px] bg-[#79543A] text-[#F8F3EB] px-1.5 py-0.5 rounded-full font-bold">
          21
        </span>
      </button>

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs transition-opacity"
          aria-hidden="true"
        />
      )}

      {/* Floating Category Navigation Popup Modal */}
      {isOpen && (
        <div
          id="category-nav-dialog"
          role="dialog"
          aria-modal="true"
          aria-label="Menu Categories"
          ref={popupRef}
          className="fixed bottom-16 sm:bottom-20 left-3 right-3 sm:left-auto sm:right-6 z-50 w-auto sm:w-80 max-w-sm max-h-[65vh] sm:max-h-[75vh] bg-white rounded-2xl shadow-2xl border border-[#79543A]/20 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200"
        >
          {/* Fixed Popup Header */}
          <div className="flex-none flex items-center justify-between px-3.5 py-3 bg-[#F8F3EB] border-b border-[#79543A]/15">
            <div>
              <h3 className="text-xs sm:text-sm font-serif font-bold text-[#38271F]">
                Menu Categories
              </h3>
              <p className="text-[10px] sm:text-[11px] text-[#6B5D55]">
                {totalItemCount} items across 21 categories
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-[#6B5D55] hover:text-[#38271F] hover:bg-[#E5D2B8]/40 rounded-full transition-colors min-h-[32px] min-w-[32px] flex items-center justify-center"
              aria-label="Close category menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Independently Scrollable Categories List */}
          <div className="relative flex-1 min-h-0 flex flex-col">
            <style>{`
              .category-scrollbar::-webkit-scrollbar {
                width: 6px;
              }
              .category-scrollbar::-webkit-scrollbar-track {
                background: #F8F3EB;
                border-radius: 8px;
                margin: 4px;
              }
              .category-scrollbar::-webkit-scrollbar-thumb {
                background: #A68A75;
                border-radius: 8px;
              }
              .category-scrollbar::-webkit-scrollbar-thumb:hover {
                background: #79543A;
              }
              .category-scrollbar {
                scrollbar-width: thin;
                scrollbar-color: #A68A75 #F8F3EB;
              }
            `}</style>
            
            {showTopFade && (
              <div className="absolute top-0 left-0 right-2 h-8 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
            )}

            <div 
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex-1 overflow-y-auto min-h-0 p-1.5 divide-y divide-[#79543A]/8 category-scrollbar"
            >
              {MENU_CATEGORIES.map((category, idx) => {
              const isActive = activeCategoryId === category.id;
              const itemCount =
                (category.items?.length || 0) +
                (category.subcategories?.reduce(
                  (acc, sub) => acc + sub.items.length,
                  0
                ) || 0);

              return (
                <button
                  key={category.id}
                  onClick={() => handleCategorySelect(category.id)}
                  className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-left transition-colors min-h-[40px] ${
                    isActive
                      ? "bg-[#E5D2B8]/60 text-[#38271F] font-bold"
                      : "text-[#38271F] hover:bg-[#F8F3EB] font-medium"
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0 pr-2">
                    <span className="text-[10px] font-mono text-[#79543A] w-4 shrink-0 text-right">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xs truncate">{category.name}</span>
                  </div>

                  <div className="flex items-center gap-1 shrink-0 text-[#79543A]">
                    <span className="text-[10px] bg-[#F8F3EB] px-1.5 py-0.2 rounded text-[#6B5D55] font-semibold">
                      {itemCount}
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                  </div>
                </button>
              );
            })}
            </div>
            
            {showBottomFade && (
              <div className="absolute bottom-0 left-0 right-2 h-10 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
            )}
          </div>
        </div>
      )}
    </aside>
  );
}

"use client";

import { useState, useMemo } from "react";
import { Search, X, ArrowUpRight } from "lucide-react";
import { getAllMenuItems } from "@/data/menu";
import { MenuItemCard } from "./MenuItemCard";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const allItems = useMemo(() => getAllMenuItems(), []);

  // Enhanced search filtering: partial, case-insensitive, whitespace-flexible
  const filteredItems = useMemo(() => {
    const raw = query.trim().toLowerCase();
    if (!raw) return [];

    const normalizedQuery = raw.replace(/[^a-z0-9]/g, "");

    return allItems.filter((entry) => {
      const name = entry.item.name.toLowerCase();
      const cat = entry.categoryName.toLowerCase();
      const sub = (entry.subcategoryName || "").toLowerCase();

      const normName = name.replace(/[^a-z0-9]/g, "");
      const normCat = cat.replace(/[^a-z0-9]/g, "");
      const normSub = sub.replace(/[^a-z0-9]/g, "");

      return (
        name.includes(raw) ||
        cat.includes(raw) ||
        sub.includes(raw) ||
        normName.includes(normalizedQuery) ||
        normCat.includes(normalizedQuery) ||
        normSub.includes(normalizedQuery)
      );
    });
  }, [query, allItems]);

  const handleClear = () => {
    setQuery("");
  };

  const handleJumpToItem = (itemId: string) => {
    setQuery("");
    setTimeout(() => {
      const el = document.getElementById(`item-${itemId}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  };

  const handleJumpToCategory = (categoryId: string) => {
    setQuery("");
    setTimeout(() => {
      const el = document.getElementById(categoryId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  };

  return (
    <div className="sticky top-[76px] sm:top-[100px] z-30 w-full max-w-full py-2 mb-4 sm:mb-6 bg-[#F8F3EB]/95 backdrop-blur-md box-border min-w-0">
      {/* Search Input Box */}
      <div className="relative w-full max-w-full box-border min-w-0">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#79543A]">
          <Search className="w-4 h-4 opacity-70" />
        </div>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search 21 categories, items, snacks, drinks..."
          className="w-full max-w-full box-border pl-8 sm:pl-9 pr-8 sm:pr-9 py-2 sm:py-2.5 rounded-xl bg-white border border-[#79543A]/20 text-[#38271F] placeholder-[#6B5D55]/60 text-xs sm:text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#79543A] focus:border-transparent shadow-xs transition-all"
          aria-label="Search the menu catalogue"
        />

        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-[#6B5D55] hover:text-[#38271F] transition-colors"
            aria-label="Clear search"
          >
            <X className="w-4 h-4 bg-[#E5D2B8]/40 p-0.5 rounded-full" />
          </button>
        )}
      </div>

      {/* Active Search Results Section */}
      {query.trim().length > 0 && (
        <div className="mt-2 p-2.5 sm:p-4 rounded-xl bg-[#F2E8DC] border border-[#79543A]/20 shadow-lg transition-all w-full max-w-full box-border min-w-0">
          <div className="flex items-center justify-between mb-2.5 pb-1.5 border-b border-[#79543A]/15 text-xs min-w-0">
            <span className="font-semibold text-[#38271F] truncate min-w-0 pr-2">
              Found {filteredItems.length} {filteredItems.length === 1 ? "item" : "items"} matching &quot;{query}&quot;
            </span>
            <button
              onClick={handleClear}
              className="text-[#79543A] hover:underline font-semibold shrink-0"
            >
              Close
            </button>
          </div>

          {filteredItems.length === 0 ? (
            <div className="text-center py-5">
              <p className="text-xs sm:text-sm font-semibold text-[#38271F]">No menu items found</p>
              <p className="text-[11px] text-[#6B5D55] mt-1">
                Try searching for &quot;Burger&quot;, &quot;Pizza&quot;, &quot;Pasta&quot;, or &quot;Khichdi&quot;.
              </p>
              <button
                onClick={handleClear}
                className="mt-2.5 px-3 py-1 bg-[#79543A] text-white text-xs font-semibold rounded-lg hover:bg-[#63432D] transition-colors"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[55vh] overflow-y-auto pr-1 w-full min-w-0">
              {filteredItems.map((entry) => (
                <div key={`${entry.categoryId}-${entry.item.id}`} className="relative group flex flex-col min-w-0 w-full">
                  <div className="mb-1 flex items-center justify-between text-[10px] sm:text-[11px] font-medium text-[#79543A] min-w-0">
                    <button
                      onClick={() => handleJumpToCategory(entry.categoryId)}
                      className="truncate min-w-0 text-left hover:underline hover:text-[#38271F]"
                      title="Jump to category section"
                    >
                      {entry.categoryName} {entry.subcategoryName ? `› ${entry.subcategoryName}` : ""}
                    </button>
                    <button
                      onClick={() => handleJumpToItem(entry.item.id)}
                      className="inline-flex items-center gap-0.5 text-[#38271F] hover:text-[#79543A] bg-[#E5D2B8] px-2 py-0.5 rounded text-[10px] font-bold shrink-0 ml-1.5 shadow-2xs hover:shadow-xs transition-all"
                      title="Jump directly to item"
                    >
                      Jump to Item <ArrowUpRight className="w-3 h-3 text-[#79543A]" />
                    </button>
                  </div>
                  <MenuItemCard item={entry.item} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

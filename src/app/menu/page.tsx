import { MENU_CATEGORIES } from "@/data/menu";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CurtainIntro } from "@/components/CurtainIntro";
import { SearchBar } from "@/components/SearchBar";
import { CategorySection } from "@/components/CategorySection";
import { CategoryNavPopup } from "@/components/CategoryNavPopup";

export const metadata = {
  title: "Menu | Berry Que Café Digital Catalogue",
  description:
    "Browse our complete digital menu featuring 21 categories including Starters, Sandwiches, Burgers, Pasta, Pizzas, Khichdi, Mocktails, Shakes, and Desserts.",
};

export default function MenuPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F3EB] text-[#38271F] w-full max-w-full overflow-x-clip">
      {/* Smooth Curtain Intro on Entry */}
      <CurtainIntro />

      <Navbar activePage="menu" />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-3.5 sm:py-8 pb-32 sm:pb-28 box-border min-w-0">
        {/* Menu Page Header - Compact Mobile Spacing */}
        <header className="mb-3 sm:mb-6 text-left">
          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-[#38271F] tracking-tight">
            Berry Que Café Menu
          </h1>
          <p className="text-xs sm:text-sm text-[#6B5D55] mt-1 max-w-xl">
            Browse our artisanal selection of 21 categories. All prices in INR (₹).
          </p>
        </header>

        {/* Live Search Component */}
        <SearchBar />

        {/* Categories Catalogue List */}
        <div className="space-y-2 sm:space-y-4">
          {MENU_CATEGORIES.map((category, index) => (
            <CategorySection
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </div>
      </main>

      {/* Floating Category Navigation Popup */}
      <CategoryNavPopup />

      <Footer />
    </div>
  );
}

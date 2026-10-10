import { CategoryAssetMapping } from "@/types/menu";

export const BRAND_ASSETS = {
  cafeName: "Berry Que Café 2.0",
  tagline: "Artisanal flavours, warm conversations, and soulful bites.",
  logoText: "BERRY QUE",
  logoSubtext: "CAFÉ & BISTRO 2.0",
  logoImage: "/images/berry-que-logo.png",
  heroImage: {
    url: "/images/hero-cafe-food.webp",
    alt: "Artisanal café table spread featuring a gourmet grilled sandwich, golden crispy fries, stone-oven pizza slice, and refreshing iced coffee",
    objectPositionDesktop: "center center",
    objectPositionMobile: "center 40%",
  }
};

export const CATEGORY_BANNERS: Record<string, CategoryAssetMapping> = {
  "starters-snacks": {
    categoryId: "starters-snacks",
    imageSrc: "/new%20images/starters%20and%20snacks.png",
    bannerUrl: "/new%20images/starters%20and%20snacks.png",
    alt: "Crispy fries, nachos, potato wedges and assorted vegetarian café starters",
    altText: "Crispy fries, nachos, potato wedges and assorted vegetarian café starters",
    objectPosition: "center 45%",
    dominantColor: "#79543A"
  },
  "soups": {
    categoryId: "soups",
    imageSrc: "/new%20images/soup.png",
    bannerUrl: "/new%20images/soup.png",
    alt: "A steaming bowl of soup with a simple café presentation",
    altText: "A steaming bowl of soup with a simple café presentation",
    objectPosition: "center 50%",
    dominantColor: "#5A3B28"
  },
  "maggi": {
    categoryId: "maggi",
    imageSrc: "/new%20images/Maggi.png",
    bannerUrl: "/new%20images/Maggi.png",
    alt: "A warm bowl of masala Maggi noodles with gourmet toppings",
    altText: "A warm bowl of masala Maggi noodles with gourmet toppings",
    objectPosition: "center 55%",
    dominantColor: "#79543A"
  },
  "sandwiches": {
    categoryId: "sandwiches",
    imageSrc: "/new%20images/Sandwich.png",
    bannerUrl: "/new%20images/Sandwich.png",
    alt: "Freshly prepared golden grilled club sandwich with melted cheese",
    altText: "Freshly prepared golden grilled club sandwich with melted cheese",
    objectPosition: "center 50%",
    dominantColor: "#6A452E"
  },
  "burgers": {
    categoryId: "burgers",
    imageSrc: "/images/burgers.webp",
    bannerUrl: "/images/burgers.webp",
    alt: "Vegetarian burger with visible bun, crisp patty, and fresh toppings",
    altText: "Vegetarian burger with visible bun, crisp patty, and fresh toppings",
    objectPosition: "center 48%",
    dominantColor: "#57351F"
  },
  "open-subs": {
    categoryId: "open-subs",
    imageSrc: "/images/open-subs.webp",
    bannerUrl: "/images/open-subs.webp",
    alt: "Toasted open sub sandwich with fresh vegetables and seasoned paneer",
    altText: "Toasted open sub sandwich with fresh vegetables and seasoned paneer",
    objectPosition: "center 50%",
    dominantColor: "#79543A"
  },
  "pasta": {
    categoryId: "pasta",
    imageSrc: "/new%20images/Pasta.png",
    bannerUrl: "/new%20images/Pasta.png",
    alt: "A plate of artisanal pasta with rich pink sauce and fresh parmesan",
    altText: "A plate of artisanal pasta with rich pink sauce and fresh parmesan",
    objectPosition: "center 50%",
    dominantColor: "#623F27"
  },
  "avocado-toast": {
    categoryId: "avocado-toast",
    imageSrc: "/new%20images/Avacado%20Toast.png",
    bannerUrl: "/new%20images/Avacado%20Toast.png",
    alt: "Avocado toast on artisan sourdough bread with seasoned seeds",
    altText: "Avocado toast on artisan sourdough bread with seasoned seeds",
    objectPosition: "center 50%",
    dominantColor: "#52432F"
  },
  "garlic-bread": {
    categoryId: "garlic-bread",
    imageSrc: "/new%20images/Garlic%20bread.png",
    bannerUrl: "/new%20images/Garlic%20bread.png",
    alt: "Golden garlic bread slices loaded with melted mozzarella cheese and herbs",
    altText: "Golden garlic bread slices loaded with melted mozzarella cheese and herbs",
    objectPosition: "center 50%",
    dominantColor: "#79543A"
  },
  "pizza": {
    categoryId: "pizza",
    imageSrc: "/images/pizza.webp",
    bannerUrl: "/images/pizza.webp",
    alt: "A freshly baked stone-oven vegetarian pizza with mozzarella and basil",
    altText: "A freshly baked stone-oven vegetarian pizza with mozzarella and basil",
    objectPosition: "center 50%",
    dominantColor: "#5A341F"
  },
  "chinese-starters": {
    categoryId: "chinese-starters",
    imageSrc: "/images/chinese-starters.webp",
    bannerUrl: "/images/chinese-starters.webp",
    alt: "Vegetarian Indo-Chinese starters with Manchurian and crispy chili paneer",
    altText: "Vegetarian Indo-Chinese starters with Manchurian and crispy chili paneer",
    objectPosition: "center 50%",
    dominantColor: "#6B3D26"
  },
  "chinese-noodles": {
    categoryId: "chinese-noodles",
    imageSrc: "/images/chinese-noodles.webp",
    bannerUrl: "/images/chinese-noodles.webp",
    alt: "A bowl of stir-fried Chinese-style noodles with fresh wok vegetables",
    altText: "A bowl of stir-fried Chinese-style noodles with fresh wok vegetables",
    objectPosition: "center 45%",
    dominantColor: "#5C3621"
  },
  "chinese-rice": {
    categoryId: "chinese-rice",
    imageSrc: "/images/chinese-rice.webp",
    bannerUrl: "/images/chinese-rice.webp",
    alt: "A plate of aromatic vegetarian wok-fried rice with spring onions and garlic",
    altText: "A plate of aromatic vegetarian wok-fried rice with spring onions and garlic",
    objectPosition: "center 50%",
    dominantColor: "#664129"
  },
  "indian-meals": {
    categoryId: "indian-meals",
    imageSrc: "/new%20images/Pav%20bhaji%20.png",
    bannerUrl: "/new%20images/Pav%20bhaji%20.png",
    alt: "A selection of Indian café meals including aromatic biryani and butter pav bhaji",
    altText: "A selection of Indian café meals including aromatic biryani and butter pav bhaji",
    objectPosition: "center 50%",
    dominantColor: "#744525"
  },
  "khichdi-lovers": {
    categoryId: "khichdi-lovers",
    imageSrc: "/images/khichdi-lovers.webp",
    bannerUrl: "/images/khichdi-lovers.webp",
    alt: "A warm bowl of dal tadka khichdi with a restrained Indian café presentation",
    altText: "A warm bowl of dal tadka khichdi with a restrained Indian café presentation",
    objectPosition: "center 50%",
    dominantColor: "#7D5230"
  },
  "sides-accompaniments": {
    categoryId: "sides-accompaniments",
    imageSrc: "/new%20images/Papad.png",
    bannerUrl: "/new%20images/Papad.png",
    alt: "Crispy papad, fresh raita, seasoned salad and accompaniment sides",
    altText: "Crispy papad, fresh raita, seasoned salad and accompaniment sides",
    objectPosition: "center 50%",
    dominantColor: "#694228"
  },
  "mocktails": {
    categoryId: "mocktails",
    imageSrc: "/new%20images/Cocktails.png",
    bannerUrl: "/new%20images/Cocktails.png",
    alt: "Colorful non-alcoholic refreshing iced mocktails in clear glasses",
    altText: "Colorful non-alcoholic refreshing iced mocktails in clear glasses",
    objectPosition: "center 40%",
    dominantColor: "#4E3C2B"
  },
  "cold-beverages": {
    categoryId: "cold-beverages",
    imageSrc: "/new%20images/Cold%20beverages.png",
    bannerUrl: "/new%20images/Cold%20beverages.png",
    alt: "Chilled iced latte, iced tea, and cold coffee in aesthetic glasses",
    altText: "Chilled iced latte, iced tea, and cold coffee in aesthetic glasses",
    objectPosition: "center 45%",
    dominantColor: "#543825"
  },
  "shakes": {
    categoryId: "shakes",
    imageSrc: "/new%20images/Shakes.png",
    bannerUrl: "/new%20images/Shakes.png",
    alt: "Thick creamy milkshakes with chocolate and biscuit toppings in tall glasses",
    altText: "Thick creamy milkshakes with chocolate and biscuit toppings in tall glasses",
    objectPosition: "center 40%",
    dominantColor: "#4A2E1C"
  },
  "hot-beverages": {
    categoryId: "hot-beverages",
    imageSrc: "/new%20images/Hot%20beverages.png",
    bannerUrl: "/new%20images/Hot%20beverages.png",
    alt: "Hot artisanal coffee and spiced masala tea in ceramic cups",
    altText: "Hot artisanal coffee and spiced masala tea in ceramic cups",
    objectPosition: "center 50%",
    dominantColor: "#452A18"
  },
  "desserts": {
    categoryId: "desserts",
    imageSrc: "/images/desserts.webp",
    bannerUrl: "/images/desserts.webp",
    alt: "Sizzling brownie with ice cream and artisanal berry cheesecakes",
    altText: "Sizzling brownie with ice cream and artisanal berry cheesecakes",
    objectPosition: "center 50%",
    dominantColor: "#3F2617"
  }
};

export const DEFAULT_CATEGORY_FALLBACK: CategoryAssetMapping = {
  imageSrc: "/images/hero-cafe-food.webp",
  alt: "Berry Que Café 2.0 Artisanal Cuisine",
  dominantColor: "#79543A"
};

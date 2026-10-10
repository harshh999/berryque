export type PriceVariants = {
  nonGrilled?: number;
  grilled?: number;
  "8inch"?: number;
  "12inch"?: number;
  [key: string]: number | undefined;
};

export interface MenuItem {
  id: string;
  name: string;
  categoryId: string;
  subcategory?: string;
  price?: number;
  priceVariants?: PriceVariants;
  serving?: string;
  popular?: boolean;
  description?: string;
  image?: string;
  provisionalPricing?: boolean;
  internalNote?: string;
}

export interface MenuSubcategory {
  id?: string;
  name: string;
  items: MenuItem[];
}

export interface MenuCategory {
  id: string;
  name: string;
  description?: string;
  pricing_labels?: string[];
  bannerImage?: string;
  subcategories?: MenuSubcategory[];
  items?: MenuItem[];
}

export interface CategoryAssetMapping {
  categoryId?: string;
  imageSrc: string;
  bannerUrl?: string; // alias for backwards compatibility
  alt: string;
  altText?: string;   // alias for backwards compatibility
  objectPosition?: string;
  dominantColor?: string;
}

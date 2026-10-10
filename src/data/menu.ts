import { MenuCategory } from "@/types/menu";

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "starters-snacks",
    name: "Starters & Snacks",
    subcategories: [
      {
        name: "Nachos",
        items: [
          { id: "nachos-classic", name: "Classic Nachos", categoryId: "starters-snacks", subcategory: "Nachos", price: 160 },
          { id: "nachos-seasoned-cheese", name: "Seasoned Cheese Nachos", categoryId: "starters-snacks", subcategory: "Nachos", price: 190 },
          { id: "nachos-loaded", name: "Loaded Nachos", categoryId: "starters-snacks", subcategory: "Nachos", price: 210 },
          { id: "nachos-sauteed-mushroom", name: "Sautéed Mushroom Nachos", categoryId: "starters-snacks", subcategory: "Nachos", price: 240 },
          { id: "nachos-guacamole-dip", name: "Guacamole Dip with Nachos", categoryId: "starters-snacks", subcategory: "Nachos", price: 280 }
        ]
      },
      {
        name: "Starters",
        items: [
          { id: "starters-herby-wedges", name: "Herby Potato Wedges", categoryId: "starters-snacks", subcategory: "Starters", price: 180 },
          { id: "starters-peri-peri-wedges", name: "Peri-Peri Potato Wedges", categoryId: "starters-snacks", subcategory: "Starters", price: 200 },
          { id: "starters-mozzarella-sticks", name: "Mozzarella Sticks", categoryId: "starters-snacks", subcategory: "Starters", serving: "5 pcs", price: 220 },
          { id: "starters-hara-bhara-kebab", name: "Hara Bhara Kebab", categoryId: "starters-snacks", subcategory: "Starters", serving: "6 pcs", price: 240 },
          { id: "starters-sabudana-vada", name: "Sabudana Vada", categoryId: "starters-snacks", subcategory: "Starters", serving: "4 pcs", price: 180 },
          { id: "starters-punjabi-samosa", name: "Punjabi Samosa", categoryId: "starters-snacks", subcategory: "Starters", serving: "2 pcs", price: 100 },
          { id: "starters-veggie-sticks", name: "Veggie Sticks", categoryId: "starters-snacks", subcategory: "Starters", serving: "5 pcs", price: 180 },
          { id: "starters-cheesy-jalapeno-samosa", name: "Cheesy Jalapeño Samosa", categoryId: "starters-snacks", subcategory: "Starters", serving: "6 pcs", price: 220 }
        ]
      },
      {
        name: "Crispy Fries",
        items: [
          { id: "fries-salted", name: "Salted Fries", categoryId: "starters-snacks", subcategory: "Crispy Fries", price: 170 },
          { id: "fries-peri-peri", name: "Peri-Peri Fries", categoryId: "starters-snacks", subcategory: "Crispy Fries", price: 190 },
          { id: "fries-lemon-pepper", name: "Lemon Pepper Fries", categoryId: "starters-snacks", subcategory: "Crispy Fries", price: 210 },
          { id: "fries-maggi-masala", name: "Maggi Masala Fries", categoryId: "starters-snacks", subcategory: "Crispy Fries", price: 220 },
          { id: "fries-cheesy-dip", name: "Cheesy Dip Fries", categoryId: "starters-snacks", subcategory: "Crispy Fries", price: 250 },
          { id: "fries-loaded-cheese", name: "Loaded Cheese Fries", categoryId: "starters-snacks", subcategory: "Crispy Fries", price: 280 }
        ]
      },
      {
        name: "Tikka Pav",
        items: [
          { id: "pav-chipotle-cheese", name: "Chipotle Cheese Pav", categoryId: "starters-snacks", subcategory: "Tikka Pav", serving: "2 pcs", price: 140 },
          { id: "pav-cheese-jalapeno", name: "Cheese Jalapeño Pav", categoryId: "starters-snacks", subcategory: "Tikka Pav", serving: "2 pcs", price: 160 },
          { id: "pav-cheese-chilli-mayo", name: "Cheese Chilli Mayo Pav", categoryId: "starters-snacks", subcategory: "Tikka Pav", serving: "2 pcs", price: 160 },
          { id: "pav-peri-peri", name: "Peri-Peri Pav", categoryId: "starters-snacks", subcategory: "Tikka Pav", serving: "2 pcs", price: 180 },
          { id: "pav-tandoori-cheese", name: "Tandoori Cheese Pav", categoryId: "starters-snacks", subcategory: "Tikka Pav", serving: "2 pcs", price: 180 }
        ]
      },
      {
        name: "Bruschetta",
        items: [
          { id: "bruschetta-classic", name: "Classic Bruschetta", categoryId: "starters-snacks", subcategory: "Bruschetta", serving: "2 pcs", price: 340 },
          { id: "bruschetta-creamy-mushroom", name: "Creamy Mushroom Bruschetta", categoryId: "starters-snacks", subcategory: "Bruschetta", serving: "2 pcs", price: 390 }
        ]
      }
    ]
  },
  {
    id: "soups",
    name: "Soups",
    items: [
      { id: "soup-lemon-coriander", name: "Lemon Coriander Soup", categoryId: "soups", price: 170 },
      { id: "soup-hot-sour", name: "Hot & Sour Soup", categoryId: "soups", price: 190 },
      { id: "soup-tomato", name: "Tomato Soup", categoryId: "soups", price: 190 },
      { id: "soup-manchow", name: "Manchow Soup", categoryId: "soups", price: 180 },
      { id: "soup-creamy-mushroom", name: "Creamy Mushroom Soup", categoryId: "soups", price: 210 },
      { id: "soup-thukpa", name: "Crispy Rice Noodle Thukpa", categoryId: "soups", price: 240 }
    ]
  },
  {
    id: "maggi",
    name: "Maggi",
    items: [
      { id: "maggi-classic", name: "Classic Maggi", categoryId: "maggi", price: 140 },
      { id: "maggi-double-masala", name: "Double Masala Maggi", categoryId: "maggi", price: 150 },
      { id: "maggi-butter", name: "Butter Maggi", categoryId: "maggi", price: 160 },
      { id: "maggi-veg-butter", name: "Veg Butter Maggi", categoryId: "maggi", price: 180 },
      { id: "maggi-tadka", name: "Tadka Maggi", categoryId: "maggi", price: 200 },
      { id: "maggi-veg-tadka", name: "Veg Tadka Maggi", categoryId: "maggi", price: 220 },
      { id: "maggi-cheese", name: "Cheese Maggi", categoryId: "maggi", price: 230 },
      { id: "maggi-veg-cheese-tadka", name: "Veg Cheese Tadka Maggi", categoryId: "maggi", price: 240 },
      { id: "maggi-loaded-cheese", name: "Loaded Cheese Maggi", categoryId: "maggi", price: 260 },
      { id: "maggi-matka-exotic-cheese", name: "Special Matka Exotic Cheese Maggi", categoryId: "maggi", price: 280 },
      { id: "maggi-matka-biryani", name: "Special Matka Biryani Maggi", categoryId: "maggi", price: 300 }
    ]
  },
  {
    id: "sandwiches",
    name: "Sandwiches",
    pricing_labels: ["Non-Grilled", "Grilled"],
    items: [
      { id: "sandwich-bread-butter", name: "Bread Butter", categoryId: "sandwiches", priceVariants: { nonGrilled: 60, grilled: 80 } },
      { id: "sandwich-bread-jam", name: "Bread Jam", categoryId: "sandwiches", priceVariants: { nonGrilled: 80, grilled: 90 } },
      { id: "sandwich-cheese-chutney", name: "Cheese Chutney Sandwich", categoryId: "sandwiches", priceVariants: { nonGrilled: 140, grilled: 160 } },
      { id: "sandwich-vegetable", name: "Vegetable Sandwich", categoryId: "sandwiches", priceVariants: { nonGrilled: 180, grilled: 200 } },
      { id: "sandwich-bombay-club", name: "Bombay Club Sandwich", categoryId: "sandwiches", priceVariants: { nonGrilled: 240, grilled: 260 } },
      { id: "sandwich-ghughra", name: "Ghughra Sandwich", categoryId: "sandwiches", price: 260 },
      { id: "sandwich-schezwan-paneer", name: "Schezwan Paneer Sandwich", categoryId: "sandwiches", priceVariants: { nonGrilled: 250, grilled: 280 } },
      { id: "sandwich-cold-veggie", name: "Cold Veggie Sandwich", categoryId: "sandwiches", priceVariants: { nonGrilled: 200, grilled: 230 } },
      { id: "sandwich-classic-russian", name: "Classic Russian Sandwich", categoryId: "sandwiches", priceVariants: { nonGrilled: 200, grilled: 230 } },
      { id: "sandwich-samosa-cheese", name: "Samosa Cheese Sandwich", categoryId: "sandwiches", price: 280 },
      { id: "sandwich-cheese-chilli-corn", name: "Cheese Chilli Corn Sandwich", categoryId: "sandwiches", price: 260 },
      { id: "sandwich-cheese-cream-mushroom", name: "Cheese Cream Mushroom Sandwich", categoryId: "sandwiches", price: 280 },
      { id: "sandwich-veg-paneer-sliced", name: "Veg Paneer Sliced Sandwich", categoryId: "sandwiches", price: 270 },
      { id: "sandwich-chilli-cheese-toast", name: "Chilli Cheese Toast", categoryId: "sandwiches", price: 220 }
    ]
  },
  {
    id: "burgers",
    name: "Burgers",
    items: [
      { id: "burger-aloo-tikki", name: "Aloo Tikki Burger", categoryId: "burgers", price: 130 },
      { id: "burger-cheese", name: "Cheese Burger", categoryId: "burgers", price: 140 },
      { id: "burger-veg-cheese", name: "Veg Cheese Burger", categoryId: "burgers", price: 160 },
      { id: "burger-double-patty", name: "Double Patty Burger", categoryId: "burgers", price: 180 },
      { id: "burger-cheese-burst", name: "Cheese Burst Burger", categoryId: "burgers", price: 190 },
      { id: "burger-spicy-paneer", name: "Spicy Paneer Burger", categoryId: "burgers", price: 200 },
      { id: "burger-paneer-cheese", name: "Paneer Cheese Burger", categoryId: "burgers", price: 220 },
      { id: "burger-mini-cheesy", name: "Mini Cheesy Burgers", categoryId: "burgers", serving: "4 pcs", price: 180 },
      { id: "burger-korean-cheese-bun", name: "Korean Cheese-Stuffed Bun", categoryId: "burgers", price: 250 }
    ]
  },
  {
    id: "open-subs",
    name: "Open Subs",
    items: [
      { id: "sub-veg-paneer", name: "Veg Paneer Sub", categoryId: "open-subs", price: 230 },
      { id: "sub-cheese-tandoori", name: "Cheese Tandoori Sub", categoryId: "open-subs", price: 210 },
      { id: "sub-peri-peri-cheese", name: "Peri-Peri Cheese Sub", categoryId: "open-subs", price: 190 }
    ]
  },
  {
    id: "pasta",
    name: "Pasta",
    items: [
      { id: "pasta-red-sauce", name: "Red Sauce Pasta", categoryId: "pasta", price: 260 },
      { id: "pasta-pink-sauce", name: "Pink Sauce Pasta", categoryId: "pasta", price: 290 },
      { id: "pasta-white-sauce", name: "White Sauce Pasta", categoryId: "pasta", price: 320 },
      { id: "pasta-indo-chinese", name: "Indo-Chinese Pasta", categoryId: "pasta", price: 260 },
      { id: "pasta-classic-mac-cheese", name: "Classic Mac & Cheese", categoryId: "pasta", price: 340 },
      { id: "pasta-baked-macaroni-pineapple", name: "Baked Macaroni & Pineapple", categoryId: "pasta", price: 360 }
    ]
  },
  {
    id: "avocado-toast",
    name: "Avocado Toast",
    items: [
      { id: "toast-classic-avocado", name: "Classic Avocado Toast", categoryId: "avocado-toast", price: 260 },
      { id: "toast-guacamole", name: "Guacamole Toast", categoryId: "avocado-toast", price: 300 },
      { id: "toast-cheese-guacamole", name: "Cheese Guacamole Toast", categoryId: "avocado-toast", price: 340 },
      { id: "toast-mushroom-guacamole", name: "Mushroom Guacamole Toast", categoryId: "avocado-toast", price: 360 },
      { id: "toast-cream-cheese-guacamole", name: "Cream Cheese Guacamole Toast", categoryId: "avocado-toast", price: 380 }
    ]
  },
  {
    id: "garlic-bread",
    name: "Garlic Bread",
    items: [
      { id: "gb-cheese", name: "Cheese Garlic Bread", categoryId: "garlic-bread", price: 240 },
      { id: "gb-golden-corn", name: "Golden Corn Garlic Bread", categoryId: "garlic-bread", price: 260 },
      { id: "gb-onion-cheese", name: "Onion Cheese Garlic Bread", categoryId: "garlic-bread", price: 260 },
      { id: "gb-veg-cheese", name: "Veg Cheese Garlic Bread", categoryId: "garlic-bread", price: 270 },
      { id: "gb-chilli-cheese", name: "Chilli Cheese Garlic Bread", categoryId: "garlic-bread", price: 280 },
      { id: "gb-cotton-cheese", name: "Cotton Cheese Garlic Bread", categoryId: "garlic-bread", price: 290 },
      { id: "gb-pesto", name: "Pesto Garlic Bread", categoryId: "garlic-bread", price: 300 },
      { id: "gb-in-house", name: "In-House Garlic Bread", categoryId: "garlic-bread", price: 320 }
    ]
  },
  {
    id: "pizza",
    name: "Pizza",
    pricing_labels: ["8 inch", "12 inch"],
    items: [
      { id: "pizza-indo-italian", name: "Indo-Italian Pizza", categoryId: "pizza", priceVariants: { "8inch": 300, "12inch": 440 } },
      { id: "pizza-margherita-1", name: "Margherita Pizza", categoryId: "pizza", priceVariants: { "8inch": 330, "12inch": 480 } },
      { id: "pizza-golden-corn", name: "Golden Corn Pizza", categoryId: "pizza", priceVariants: { "8inch": 360, "12inch": 510 } },
      { id: "pizza-onion", name: "Onion Pizza", categoryId: "pizza", priceVariants: { "8inch": 360, "12inch": 510 } },
      { id: "pizza-tricolor-capsicum", name: "Tricolor Capsicum Pizza", categoryId: "pizza", priceVariants: { "8inch": 360, "12inch": 510 } },
      { id: "pizza-margherita-2", name: "Margherita Pizza — second listing", categoryId: "pizza", priceVariants: { "8inch": 380, "12inch": 550 } },
      { id: "pizza-peppy-paneer", name: "Peppy Paneer Pizza", categoryId: "pizza", priceVariants: { "8inch": 390, "12inch": 540 } },
      { id: "pizza-in-house-special", name: "In-House Special Pizza", categoryId: "pizza", priceVariants: { "8inch": 410, "12inch": 550 } },
      { id: "pizza-half-and-half", name: "Half & Half Pizza", categoryId: "pizza", priceVariants: { "8inch": 420, "12inch": 550 } },
      { id: "pizza-pesto", name: "Pesto Pizza", categoryId: "pizza", priceVariants: { "8inch": 430, "12inch": 630 } },
      {
        id: "pizza-double-cheese",
        name: "Double Cheese Pizza",
        categoryId: "pizza",
        priceVariants: { "8inch": 380, "12inch": 550 },
        provisionalPricing: true,
        internalNote: "Estimated prices; confirm with the cafe owner before final printing or official publication."
      }
    ]
  },
  {
    id: "chinese-starters",
    name: "Chinese Starters",
    items: [
      { id: "cs-dry-manchurian", name: "Dry Manchurian", categoryId: "chinese-starters", price: 200 },
      { id: "cs-honey-chilli-potato", name: "Honey Chilli Potato", categoryId: "chinese-starters", price: 220 },
      { id: "cs-veg-crispy", name: "Veg Crispy", categoryId: "chinese-starters", price: 240 },
      { id: "cs-paneer-chilli", name: "Paneer Chilli", categoryId: "chinese-starters", price: 280 },
      { id: "cs-dragon-potato", name: "Dragon Potato", categoryId: "chinese-starters", price: 240 },
      { id: "cs-paneer-65", name: "Paneer 65", categoryId: "chinese-starters", price: 300 },
      { id: "cs-spring-rolls", name: "Spring Rolls", categoryId: "chinese-starters", serving: "6 pcs", price: 300 },
      { id: "cs-paneer-black-pepper", name: "Paneer Black Pepper", categoryId: "chinese-starters", price: 320 },
      { id: "cs-mushroom-chilli", name: "Mushroom Chilli", categoryId: "chinese-starters", price: 320 },
      { id: "cs-crispy-baby-corn-chilli", name: "Crispy Baby Corn Chilli", categoryId: "chinese-starters", price: 280 }
    ]
  },
  {
    id: "chinese-noodles",
    name: "Chinese Noodles",
    items: [
      { id: "cn-hakka-noodles", name: "Hakka Noodles", categoryId: "chinese-noodles", price: 220 },
      { id: "cn-chilli-garlic-noodles", name: "Chilli Garlic Noodles", categoryId: "chinese-noodles", price: 240 },
      { id: "cn-schezwan-noodles", name: "Schezwan Noodles", categoryId: "chinese-noodles", price: 240 },
      { id: "cn-manchurian-noodles", name: "Manchurian Noodles", categoryId: "chinese-noodles", price: 260 },
      { id: "cn-chinese-bhel", name: "Chinese Bhel", categoryId: "chinese-noodles", price: 270 },
      { id: "cn-bombay-chinese-bhel", name: "Bombay-Style Chinese Bhel", categoryId: "chinese-noodles", price: 230 },
      { id: "cn-singapore-noodles", name: "Singapore Noodles", categoryId: "chinese-noodles", price: 260 }
    ]
  },
  {
    id: "chinese-rice",
    name: "Chinese Rice",
    items: [
      { id: "cr-veg-fried-rice", name: "Veg Fried Rice", categoryId: "chinese-rice", price: 200 },
      { id: "cr-schezwan-fried-rice", name: "Schezwan Fried Rice", categoryId: "chinese-rice", price: 220 },
      { id: "cr-triple-rice", name: "Triple Rice", categoryId: "chinese-rice", price: 280 },
      { id: "cr-manchurian-rice", name: "Manchurian Rice", categoryId: "chinese-rice", price: 240 },
      { id: "cr-chilli-garlic-rice", name: "Chilli Garlic Rice", categoryId: "chinese-rice", price: 270 },
      { id: "cr-burnt-garlic-spinach-rice", name: "Burnt Garlic Spinach Rice", categoryId: "chinese-rice", price: 280 },
      { id: "cr-paneer-fried-rice", name: "Paneer Fried Rice", categoryId: "chinese-rice", price: 300 },
      { id: "cr-lemon-coriander-rice", name: "Lemon & Coriander Rice", categoryId: "chinese-rice", price: 320 },
      { id: "cr-mushroom-fried-rice", name: "Mushroom Fried Rice", categoryId: "chinese-rice", price: 300 },
      { id: "cr-singapore-rice", name: "Singapore Rice", categoryId: "chinese-rice", price: 300 },
      { id: "cr-combination-rice", name: "Combination Rice (Rice / Noodles / Manchurian)", categoryId: "chinese-rice", price: 399 }
    ]
  },
  {
    id: "indian-meals",
    name: "Indian Meals",
    subcategories: [
      {
        name: "Pav Bhaji",
        items: [
          { id: "im-regular-pav-bhaji", name: "Regular Pav Bhaji", categoryId: "indian-meals", subcategory: "Pav Bhaji", price: 180 },
          { id: "im-butter-pav-bhaji", name: "Butter Pav Bhaji", categoryId: "indian-meals", subcategory: "Pav Bhaji", price: 200 },
          { id: "im-cheese-pav-bhaji", name: "Cheese Pav Bhaji", categoryId: "indian-meals", subcategory: "Pav Bhaji", price: 220 },
          { id: "im-garlic-tadka-pav-bhaji", name: "Garlic Tadka Pav Bhaji", categoryId: "indian-meals", subcategory: "Pav Bhaji", price: 250 }
        ]
      },
      {
        name: "Chole Kulche",
        items: [
          { id: "im-regular-chole-kulche", name: "Regular Chole Kulche", categoryId: "indian-meals", subcategory: "Chole Kulche", price: 170 },
          { id: "im-butter-chole-kulche", name: "Butter Chole Kulche", categoryId: "indian-meals", subcategory: "Chole Kulche", price: 190 },
          { id: "im-cheese-chole-kulche", name: "Cheese Chole Kulche", categoryId: "indian-meals", subcategory: "Chole Kulche", price: 210 },
          { id: "im-garlic-tadka-chole-kulche", name: "Garlic Tadka Chole Kulche", categoryId: "indian-meals", subcategory: "Chole Kulche", price: 260 }
        ]
      },
      {
        name: "Pulao & Rice",
        items: [
          { id: "im-masala-rice", name: "Masala Rice", categoryId: "indian-meals", subcategory: "Pulao & Rice", price: 160 },
          { id: "im-lemon-rice", name: "Lemon Rice", categoryId: "indian-meals", subcategory: "Pulao & Rice", price: 180 },
          { id: "im-tomato-rice", name: "Tomato Rice", categoryId: "indian-meals", subcategory: "Pulao & Rice", price: 180 },
          { id: "im-veg-pulao", name: "Veg Pulao", categoryId: "indian-meals", subcategory: "Pulao & Rice", price: 200 },
          { id: "im-paneer-pulao", name: "Paneer Pulao", categoryId: "indian-meals", subcategory: "Pulao & Rice", price: 230 }
        ]
      },
      {
        name: "Biryani",
        items: [
          { id: "im-veg-dum-biryani", name: "Veg Dum Biryani", categoryId: "indian-meals", subcategory: "Biryani", price: 300 },
          { id: "im-paneer-veg-biryani", name: "Paneer Veg Biryani", categoryId: "indian-meals", subcategory: "Biryani", price: 330 },
          { id: "im-mushroom-veg-biryani", name: "Mushroom Veg Biryani", categoryId: "indian-meals", subcategory: "Biryani", price: 360 }
        ]
      }
    ]
  },
  {
    id: "khichdi-lovers",
    name: "Khichdi Lovers",
    items: [
      { id: "kh-plain", name: "Plain Khichdi", categoryId: "khichdi-lovers", price: 149 },
      { id: "kh-masala", name: "Masala Khichdi", categoryId: "khichdi-lovers", price: 180 },
      { id: "kh-cheese", name: "Cheese Khichdi", categoryId: "khichdi-lovers", price: 200 },
      { id: "kh-cheese-masala", name: "Cheese Masala Khichdi", categoryId: "khichdi-lovers", price: 250 },
      { id: "kh-dal-tadka", name: "Dal Tadka Khichdi", categoryId: "khichdi-lovers", price: 230 },
      { id: "kh-special-dal-tadka", name: "Special Dal Tadka Khichdi", categoryId: "khichdi-lovers", price: 260 },
      { id: "kh-garlic-tadka", name: "Garlic Tadka Khichdi", categoryId: "khichdi-lovers", price: 280 },
      { id: "kh-butter-masala", name: "Butter Masala Khichdi", categoryId: "khichdi-lovers", price: 240 },
      { id: "kh-veg-masala", name: "Vegetable Masala Khichdi", categoryId: "khichdi-lovers", price: 240 },
      { id: "kh-mushroom-paneer", name: "Mushroom Paneer Khichdi", categoryId: "khichdi-lovers", price: 280 },
      { id: "kh-paneer-masala", name: "Paneer Masala Khichdi", categoryId: "khichdi-lovers", price: 300 },
      { id: "kh-palak-lasuni-tadka", name: "Palak Lasuni Tadka Khichdi", categoryId: "khichdi-lovers", price: 300 }
    ]
  },
  {
    id: "sides-accompaniments",
    name: "Sides & Accompaniments",
    subcategories: [
      {
        name: "Sides",
        items: [
          { id: "side-roasted-papad", name: "Roasted Papad", categoryId: "sides-accompaniments", subcategory: "Sides", price: 40 },
          { id: "side-fried-papad", name: "Fried Papad", categoryId: "sides-accompaniments", subcategory: "Sides", price: 60 },
          { id: "side-masala-papad", name: "Masala Papad", categoryId: "sides-accompaniments", subcategory: "Sides", price: 80 },
          { id: "side-cheese-masala-papad", name: "Cheese Masala Papad", categoryId: "sides-accompaniments", subcategory: "Sides", price: 100 }
        ]
      },
      {
        name: "Accompaniments",
        items: [
          { id: "acc-buttermilk", name: "Buttermilk", categoryId: "sides-accompaniments", subcategory: "Accompaniments", price: 80 },
          { id: "acc-masala-buttermilk", name: "Masala Buttermilk", categoryId: "sides-accompaniments", subcategory: "Accompaniments", price: 100 },
          { id: "acc-onion-salad", name: "Onion Salad", categoryId: "sides-accompaniments", subcategory: "Accompaniments", price: 80 },
          { id: "acc-green-salad", name: "Green Salad", categoryId: "sides-accompaniments", subcategory: "Accompaniments", price: 80 },
          { id: "acc-tomato-salad", name: "Tomato Salad", categoryId: "sides-accompaniments", subcategory: "Accompaniments", price: 80 },
          { id: "acc-veg-raita", name: "Veg Raita", categoryId: "sides-accompaniments", subcategory: "Accompaniments", price: 70 },
          { id: "acc-boondi-raita", name: "Boondi Raita", categoryId: "sides-accompaniments", subcategory: "Accompaniments", price: 80 },
          { id: "acc-plain-curd", name: "Plain Curd", categoryId: "sides-accompaniments", subcategory: "Accompaniments", price: 60 },
          { id: "acc-sweet-lassi", name: "Sweet Lassi", categoryId: "sides-accompaniments", subcategory: "Accompaniments", price: 120 }
        ]
      },
      {
        name: "Extras & Add-ons",
        items: [
          { id: "extra-manchurian", name: "Manchurian", categoryId: "sides-accompaniments", subcategory: "Extras & Add-ons", price: 60 },
          { id: "extra-mushroom", name: "Mushroom", categoryId: "sides-accompaniments", subcategory: "Extras & Add-ons", price: 60 },
          { id: "extra-broccoli", name: "Broccoli", categoryId: "sides-accompaniments", subcategory: "Extras & Add-ons", price: 60 },
          { id: "extra-paneer", name: "Paneer", categoryId: "sides-accompaniments", subcategory: "Extras & Add-ons", price: 60 },
          { id: "extra-corn", name: "Corn", categoryId: "sides-accompaniments", subcategory: "Extras & Add-ons", price: 60 },
          { id: "extra-cheese", name: "Cheese", categoryId: "sides-accompaniments", subcategory: "Extras & Add-ons", price: 60 },
          { id: "extra-fried-noodles-rice", name: "Fried Noodles / Rice", categoryId: "sides-accompaniments", subcategory: "Extras & Add-ons", price: 60 }
        ]
      },
      {
        name: "Pav & Kulcha Add-ons",
        items: [
          { id: "pk-extra-pav", name: "Extra Pav", categoryId: "sides-accompaniments", subcategory: "Pav & Kulcha Add-ons", price: 15 },
          { id: "pk-butter-pav", name: "Butter Pav", categoryId: "sides-accompaniments", subcategory: "Pav & Kulcha Add-ons", serving: "2 pcs", price: 40 },
          { id: "pk-masala-pav", name: "Masala Pav", categoryId: "sides-accompaniments", subcategory: "Pav & Kulcha Add-ons", serving: "2 pcs", price: 80 },
          { id: "pk-extra-kulcha", name: "Extra Kulcha", categoryId: "sides-accompaniments", subcategory: "Pav & Kulcha Add-ons", price: 25 },
          { id: "pk-butter-kulcha", name: "Butter Kulcha", categoryId: "sides-accompaniments", subcategory: "Pav & Kulcha Add-ons", price: 30 },
          { id: "pk-masala-kulcha", name: "Masala Kulcha", categoryId: "sides-accompaniments", subcategory: "Pav & Kulcha Add-ons", price: 60 }
        ]
      }
    ]
  },
  {
    id: "mocktails",
    name: "Mocktails",
    items: [
      { id: "mock-mint-mojito", name: "Mint Mojito", categoryId: "mocktails", price: 160 },
      { id: "mock-lime-soda", name: "Lime Soda", categoryId: "mocktails", price: 180 },
      { id: "mock-sweet-lime-soda", name: "Sweet Lime Soda", categoryId: "mocktails", price: 190 },
      { id: "mock-breezy-blue", name: "Breezy Blue", categoryId: "mocktails", price: 210 },
      { id: "mock-watermelon", name: "Watermelon Mocktail", categoryId: "mocktails", price: 220 },
      { id: "mock-cosmopolitan", name: "Cosmopolitan", categoryId: "mocktails", price: 240 },
      { id: "mock-romeo-colada", name: "Romeo Colada", categoryId: "mocktails", price: 260 }
    ]
  },
  {
    id: "cold-beverages",
    name: "Cold Beverages",
    items: [
      { id: "cb-watermelon-iced-tea", name: "Watermelon Iced Tea", categoryId: "cold-beverages", price: 180 },
      { id: "cb-lemon-iced-tea", name: "Lemon Iced Tea", categoryId: "cold-beverages", price: 160 },
      { id: "cb-lemon-mint-iced-tea", name: "Lemon Mint Iced Tea", categoryId: "cold-beverages", price: 170 },
      { id: "cb-cold-coffee", name: "Cold Coffee", categoryId: "cold-beverages", price: 170 },
      { id: "cb-peach-iced-tea", name: "Peach Iced Tea", categoryId: "cold-beverages", price: 200 },
      { id: "cb-hazelnut-cold-coffee", name: "Hazelnut Cold Coffee", categoryId: "cold-beverages", price: 190 },
      { id: "cb-irish-cold-coffee", name: "Irish Cold Coffee", categoryId: "cold-beverages", price: 210 },
      { id: "cb-iced-latte", name: "Iced Latte", categoryId: "cold-beverages", price: 200 },
      { id: "cb-iced-americano", name: "Iced Americano", categoryId: "cold-beverages", price: 220 },
      { id: "cb-caramel-cold-coffee", name: "Caramel Cold Coffee", categoryId: "cold-beverages", price: 240 },
      { id: "cb-cold-bournvita", name: "Cold Bournvita", categoryId: "cold-beverages", price: 220 }
    ]
  },
  {
    id: "shakes",
    name: "Shakes",
    items: [
      { id: "shake-vanilla", name: "Vanilla Shake", categoryId: "shakes", price: 200 },
      { id: "shake-mango-classic", name: "Mango Classic Shake", categoryId: "shakes", price: 220 },
      { id: "shake-strawberry", name: "Strawberry Shake", categoryId: "shakes", price: 220 },
      { id: "shake-chocolate", name: "Chocolate Shake", categoryId: "shakes", price: 240 },
      { id: "shake-hazelnut", name: "Hazelnut Shake", categoryId: "shakes", price: 260 },
      { id: "shake-kitkat", name: "KitKat Shake", categoryId: "shakes", price: 240 },
      { id: "shake-oreo-premium", name: "Oreo Premium Shake", categoryId: "shakes", price: 260 },
      { id: "shake-nutella", name: "Nutella Shake", categoryId: "shakes", price: 260 },
      { id: "shake-brownie", name: "Brownie Shake", categoryId: "shakes", price: 260 },
      { id: "shake-biscoff", name: "Biscoff Shake", categoryId: "shakes", price: 280 }
    ]
  },
  {
    id: "hot-beverages",
    name: "Hot Beverages",
    items: [
      { id: "hb-hot-coffee", name: "Hot Coffee", categoryId: "hot-beverages", price: 130 },
      { id: "hb-ginger-tea", name: "Ginger Tea", categoryId: "hot-beverages", price: 70 },
      { id: "hb-masala-tea", name: "Masala Tea", categoryId: "hot-beverages", price: 70 },
      { id: "hb-black-coffee", name: "Black Coffee", categoryId: "hot-beverages", price: 100 },
      { id: "hb-hot-chocolate", name: "Hot Chocolate", categoryId: "hot-beverages", price: 160 },
      { id: "hb-hot-milk", name: "Hot Milk", categoryId: "hot-beverages", price: 120 },
      { id: "hb-black-tea", name: "Black Tea", categoryId: "hot-beverages", price: 100 },
      { id: "hb-green-tea", name: "Green Tea", categoryId: "hot-beverages", price: 120 }
    ]
  },
  {
    id: "desserts",
    name: "Desserts",
    items: [
      { id: "dessert-vanilla-brownie", name: "Vanilla Ice Cream with Brownie", categoryId: "desserts", price: 180 },
      { id: "dessert-sizzling-brownie", name: "Hot Sizzling Brownie", categoryId: "desserts", price: 260 },
      { id: "dessert-cheese-pineapple-sandwich", name: "Cheese Pineapple Sandwich", categoryId: "desserts", price: 200 },
      { id: "dessert-classic-chocolate-sandwich", name: "Classic Chocolate Sandwich", categoryId: "desserts", price: 200 },
      { id: "dessert-cheese-choc-pineapple-sandwich", name: "Cheese Chocolate Pineapple Sandwich", categoryId: "desserts", price: 220 },
      { id: "dessert-blueberry-cheesecake", name: "Blueberry Cheesecake", categoryId: "desserts", price: 250 },
      { id: "dessert-nutella-cheesecake", name: "Nutella Cheesecake", categoryId: "desserts", price: 280 },
      { id: "dessert-biscoff-cheesecake", name: "Biscoff Cheesecake", categoryId: "desserts", price: 280 }
    ]
  }
];

import { MenuItem } from "@/types/menu";

export interface SearchIndexItem {
  item: MenuItem;
  categoryName: string;
  categoryId: string;
  subcategoryName?: string;
}

// Helper to flatten all items for search index
export function getAllMenuItems(): SearchIndexItem[] {
  const result: SearchIndexItem[] = [];
  for (const cat of MENU_CATEGORIES) {
    if (cat.items) {
      for (const item of cat.items) {
        result.push({ item, categoryName: cat.name, categoryId: cat.id });
      }
    }
    if (cat.subcategories) {
      for (const sub of cat.subcategories) {
        for (const item of sub.items) {
          result.push({ item, categoryName: cat.name, categoryId: cat.id, subcategoryName: sub.name });
        }
      }
    }
  }
  return result;
}

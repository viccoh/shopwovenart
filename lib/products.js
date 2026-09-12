// Product catalog for Shopwovenart.
// Replace image paths and prices with your real catalog as it grows.
// Prices are in Naira (kobo handled at checkout — Paystack expects the
// smallest currency unit, so amounts are multiplied by 100 there).

export const products = [
  {
    slug: "sunset-granny-square-throw",
    name: "Sunset Granny Square Throw Blanket",
    category: "Blankets",
    price: 45000,
    description:
      "A full-size throw built from classic granny squares, hand-crocheted in a sunset run of clay, marigold, teal and lime. Finished with a hand-knotted tassel fringe on every edge. Each one takes roughly nine days to make, and no two rows fall in exactly the same order.",
    care: "Hand wash cold, lay flat to dry. Store folded, not hung, to keep the squares from stretching.",
    images: ["/images/granny-square-set.jpg"],
    sizes: [
      { label: "Lap (100 x 130 cm)", price: 38000 },
      { label: "Full (150 x 180 cm)", price: 45000 }
    ],
    featured: true
  },
  {
    slug: "sunset-granny-square-cushion",
    name: "Sunset Granny Square Cushion Cover",
    category: "Throw Pillows",
    price: 16000,
    description:
      "The matching cushion cover to our Sunset throw — concentric granny squares in clay, marigold, teal and a deep indigo centre. Sold as a cover with a zip closure; insert available as an add-on.",
    care: "Hand wash cold, lay flat to dry.",
    images: ["/images/granny-square-set.jpg"],
    sizes: [
      { label: "16 x 16 in", price: 16000 },
      { label: "18 x 18 in", price: 18500 }
    ],
    featured: true
  },
  {
    slug: "citrus-dot-cushion",
    name: "Citrus Dot Cushion Cover",
    category: "Throw Pillows",
    price: 15000,
    description:
      "Lime and white, worked in a tight filet-dot pattern with a soft corner tassel at each seam. A quieter piece for pairing with louder patterns on the same sofa.",
    care: "Hand wash cold, lay flat to dry.",
    images: ["/images/pillow-stack.jpg"],
    sizes: [
      { label: "16 x 16 in", price: 15000 },
      { label: "18 x 18 in", price: 17500 }
    ],
    featured: true
  },
  {
    slug: "embers-zigzag-cushion",
    name: "Embers Zigzag Cushion Cover",
    category: "Throw Pillows",
    price: 15500,
    description:
      "A bold black-and-clay zigzag, crocheted lengthwise so the chevrons wrap fully around the bolster. Reads warm from across the room, graphic up close.",
    care: "Hand wash cold, lay flat to dry.",
    images: ["/images/pillow-stack.jpg"],
    sizes: [
      { label: "14 x 20 in (bolster)", price: 15500 }
    ],
    featured: false
  },
  {
    slug: "harmattan-chevron-cushion",
    name: "Harmattan Chevron Cushion Cover",
    category: "Throw Pillows",
    price: 15500,
    description:
      "Indigo and gold chevrons in a dense single crochet, named for the dust-gold skies of harmattan season. Heavier drape than our filet pieces — good for a reading chair that gets daily use.",
    care: "Hand wash cold, lay flat to dry.",
    images: ["/images/pillow-stack.jpg"],
    sizes: [
      { label: "14 x 20 in (bolster)", price: 15500 }
    ],
    featured: false
  },
  {
    slug: "market-day-diamond-cushion",
    name: "Market Day Diamond Cushion Cover",
    category: "Throw Pillows",
    price: 15000,
    description:
      "Navy ground with a scattered diamond motif in clay, gold and white — inspired by the fabric stalls at Balogun Market. Pairs well as an accent against a solid-colour sofa.",
    care: "Hand wash cold, lay flat to dry.",
    images: ["/images/pillow-stack.jpg"],
    sizes: [
      { label: "16 x 16 in", price: 15000 }
    ],
    featured: false
  },
  {
    slug: "coastline-stripe-cushion",
    name: "Coastline Stripe Cushion Cover",
    category: "Throw Pillows",
    price: 14000,
    description:
      "A calm, all-white base carried by thin stripes of red, gold, teal and seafoam — the lightest piece in the collection, made for brightening a neutral room without overwhelming it.",
    care: "Hand wash cold, lay flat to dry.",
    images: ["/images/pillow-stack.jpg"],
    sizes: [
      { label: "18 x 18 in", price: 14000 }
    ],
    featured: false
  }
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

export function getCategories() {
  return Array.from(new Set(products.map((p) => p.category)));
}

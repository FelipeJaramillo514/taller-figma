export type FoodDeliveryHotspotShape = "card" | "circle" | "pill";

export type FoodDeliveryHotspot = {
  cardId: number;
  height: number;
  label: string;
  left: number;
  shape?: FoodDeliveryHotspotShape;
  top: number;
  width: number;
};

export type FoodDeliveryCard = {
  alt: string;
  hotspots: FoodDeliveryHotspot[];
  id: number;
  src: string;
  title: string;
};

type HotspotRect = {
  height: number;
  left: number;
  top: number;
  width: number;
};

function buildCardSource(id: number) {
  return `/cards/Food-Delivery_page-${String(id).padStart(4, "0")}.jpg`;
}

function createHotspot(
  label: string,
  cardId: number,
  rect: HotspotRect,
  shape: FoodDeliveryHotspotShape = "pill",
): FoodDeliveryHotspot {
  return {
    cardId,
    height: rect.height,
    label,
    left: rect.left,
    shape,
    top: rect.top,
    width: rect.width,
  };
}

const getStartedButton = {
  height: 56,
  left: 24,
  top: 668,
  width: 312,
} satisfies HotspotRect;

const avatarButton = {
  height: 80,
  left: 18,
  top: 38,
  width: 80,
} satisfies HotspotRect;

const menuButton = {
  height: 82,
  left: 276,
  top: 34,
  width: 82,
} satisfies HotspotRect;

const searchFilterButton = {
  height: 78,
  left: 286,
  top: 182,
  width: 68,
} satisfies HotspotRect;

const biryaniCategoryButton = {
  height: 56,
  left: 20,
  top: 292,
  width: 146,
} satisfies HotspotRect;

const pizzaCategoryButton = {
  height: 56,
  left: 184,
  top: 292,
  width: 138,
} satisfies HotspotRect;

const burgerCategoryButton = {
  height: 56,
  left: 320,
  top: 292,
  width: 40,
} satisfies HotspotRect;

const homePrimaryTabButton = {
  height: 88,
  left: 18,
  top: 690,
  width: 88,
} satisfies HotspotRect;

const homeSecondaryTabButton = {
  height: 60,
  left: 126,
  top: 708,
  width: 64,
} satisfies HotspotRect;

const homeTertiaryTabButton = {
  height: 60,
  left: 234,
  top: 708,
  width: 64,
} satisfies HotspotRect;

const homeQuaternaryTabButton = {
  height: 60,
  left: 300,
  top: 708,
  width: 56,
} satisfies HotspotRect;

const leftProductCard = {
  height: 254,
  left: 18,
  top: 426,
  width: 154,
} satisfies HotspotRect;

const rightProductCard = {
  height: 254,
  left: 190,
  top: 426,
  width: 154,
} satisfies HotspotRect;

const backButton = {
  height: 78,
  left: 20,
  top: 38,
  width: 78,
} satisfies HotspotRect;

const favoriteButton = {
  height: 78,
  left: 282,
  top: 38,
  width: 78,
} satisfies HotspotRect;

const quantityDecreaseButton = {
  height: 58,
  left: 18,
  top: 430,
  width: 58,
} satisfies HotspotRect;

const quantityIncreaseButton = {
  height: 58,
  left: 96,
  top: 430,
  width: 58,
} satisfies HotspotRect;

const smallSizeButton = {
  height: 48,
  left: 20,
  top: 534,
  width: 118,
} satisfies HotspotRect;

const mediumSizeButton = {
  height: 48,
  left: 148,
  top: 534,
  width: 120,
} satisfies HotspotRect;

const largeSizeButton = {
  height: 48,
  left: 278,
  top: 534,
  width: 72,
} satisfies HotspotRect;

const addToCartButton = {
  height: 62,
  left: 20,
  top: 706,
  width: 320,
} satisfies HotspotRect;

function buildHomeHotspots(
  nextHomeId: number,
  leftDetailId: number,
  rightDetailId: number,
) {
  return [
    createHotspot("Return to the welcome card", 1, avatarButton, "circle"),
    createHotspot("Open the next home section", nextHomeId, menuButton, "circle"),
    createHotspot(
      "Browse another home section",
      nextHomeId,
      searchFilterButton,
      "circle",
    ),
    createHotspot(
      "Show the biryani category",
      2,
      biryaniCategoryButton,
    ),
    createHotspot("Show the pizza category", 5, pizzaCategoryButton),
    createHotspot("Show the burger category", 8, burgerCategoryButton),
    createHotspot("Open the first featured item", leftDetailId, leftProductCard, "card"),
    createHotspot(
      "Open the second featured item",
      rightDetailId,
      rightProductCard,
      "card",
    ),
    createHotspot("Go to the biryani home tab", 2, homePrimaryTabButton, "circle"),
    createHotspot("Go to the pizza home tab", 5, homeSecondaryTabButton, "circle"),
    createHotspot("Go to the burger home tab", 8, homeTertiaryTabButton, "circle"),
    createHotspot(
      "Go to the sandwich home tab",
      11,
      homeQuaternaryTabButton,
      "circle",
    ),
  ];
}

function buildDetailHotspots(
  homeId: number,
  firstVariantId: number,
  secondVariantId: number,
  sizeTargets: {
    large: number;
    medium: number;
    small: number;
  },
) {
  return [
    createHotspot("Go back to the category list", homeId, backButton, "circle"),
    createHotspot("Save this item", homeId, favoriteButton, "circle"),
    createHotspot(
      "Decrease the item selection",
      firstVariantId,
      quantityDecreaseButton,
      "circle",
    ),
    createHotspot(
      "Increase the item selection",
      secondVariantId,
      quantityIncreaseButton,
      "circle",
    ),
    createHotspot("Choose the small option", sizeTargets.small, smallSizeButton),
    createHotspot("Choose the medium option", sizeTargets.medium, mediumSizeButton),
    createHotspot("Choose the large option", sizeTargets.large, largeSizeButton),
    createHotspot("Add this item to the cart", homeId, addToCartButton),
  ];
}

export const foodDeliveryCards: FoodDeliveryCard[] = [
  {
    alt: "Food delivery reference card 1",
    hotspots: [
      createHotspot("Start the food delivery flow", 2, getStartedButton),
    ],
    id: 1,
    src: buildCardSource(1),
    title: "Card 1 Comparison",
  },
  {
    alt: "Food delivery reference card 2",
    hotspots: buildHomeHotspots(5, 3, 4),
    id: 2,
    src: buildCardSource(2),
    title: "Card 2 Comparison",
  },
  {
    alt: "Food delivery reference card 3",
    hotspots: buildDetailHotspots(2, 3, 4, {
      large: 4,
      medium: 4,
      small: 3,
    }),
    id: 3,
    src: buildCardSource(3),
    title: "Card 3 Comparison",
  },
  {
    alt: "Food delivery reference card 4",
    hotspots: buildDetailHotspots(2, 3, 4, {
      large: 4,
      medium: 4,
      small: 3,
    }),
    id: 4,
    src: buildCardSource(4),
    title: "Card 4 Comparison",
  },
  {
    alt: "Food delivery reference card 5",
    hotspots: buildHomeHotspots(8, 6, 7),
    id: 5,
    src: buildCardSource(5),
    title: "Card 5 Comparison",
  },
  {
    alt: "Food delivery reference card 6",
    hotspots: buildDetailHotspots(5, 6, 7, {
      large: 6,
      medium: 6,
      small: 7,
    }),
    id: 6,
    src: buildCardSource(6),
    title: "Card 6 Comparison",
  },
  {
    alt: "Food delivery reference card 7",
    hotspots: buildDetailHotspots(5, 6, 7, {
      large: 6,
      medium: 6,
      small: 7,
    }),
    id: 7,
    src: buildCardSource(7),
    title: "Card 7 Comparison",
  },
  {
    alt: "Food delivery reference card 8",
    hotspots: buildHomeHotspots(11, 9, 10),
    id: 8,
    src: buildCardSource(8),
    title: "Card 8 Comparison",
  },
  {
    alt: "Food delivery reference card 9",
    hotspots: buildDetailHotspots(8, 9, 10, {
      large: 10,
      medium: 10,
      small: 9,
    }),
    id: 9,
    src: buildCardSource(9),
    title: "Card 9 Comparison",
  },
  {
    alt: "Food delivery reference card 10",
    hotspots: buildDetailHotspots(8, 9, 10, {
      large: 10,
      medium: 10,
      small: 9,
    }),
    id: 10,
    src: buildCardSource(10),
    title: "Card 10 Comparison",
  },
  {
    alt: "Food delivery reference card 11",
    hotspots: buildHomeHotspots(2, 12, 13),
    id: 11,
    src: buildCardSource(11),
    title: "Card 11 Comparison",
  },
  {
    alt: "Food delivery reference card 12",
    hotspots: buildDetailHotspots(11, 12, 13, {
      large: 13,
      medium: 13,
      small: 12,
    }),
    id: 12,
    src: buildCardSource(12),
    title: "Card 12 Comparison",
  },
  {
    alt: "Food delivery reference card 13",
    hotspots: buildDetailHotspots(11, 12, 13, {
      large: 13,
      medium: 13,
      small: 12,
    }),
    id: 13,
    src: buildCardSource(13),
    title: "Card 13 Comparison",
  },
];

const foodDeliveryCardIndexById = new Map(
  foodDeliveryCards.map((card, index) => [card.id, index]),
);

export function getFoodDeliveryCardIndex(cardId: number) {
  return foodDeliveryCardIndexById.get(cardId) ?? -1;
}

export const defaultCardIndex = 0;

"use client";

import { startTransition, useState } from "react";
import {
  defaultCardIndex,
  foodDeliveryCards,
  getFoodDeliveryCardIndex,
  type FoodDeliveryHotspotShape,
} from "@/components/cards/food-delivery-cards";
import { FoodDeliveryReferenceCardCanvas } from "@/components/cards/food-delivery-reference-card";

export function FoodDeliveryCardCarousel() {
  const [currentIndex, setCurrentIndex] = useState(defaultCardIndex);
  const currentCard = foodDeliveryCards[currentIndex];

  const goToCard = (cardId: number) => {
    const nextIndex = getFoodDeliveryCardIndex(cardId);

    if (nextIndex === -1 || nextIndex === currentIndex) {
      return;
    }

    startTransition(() => {
      setCurrentIndex(nextIndex);
    });
  };

  return (
    <main className="min-h-screen bg-[#cfcaca] px-4 py-6">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-[440px] items-center justify-center">
        <div className="relative h-[779px] w-[360px]">
          <FoodDeliveryReferenceCardCanvas
            alt={currentCard.alt}
            src={currentCard.src}
          />

          <div className="pointer-events-none absolute inset-0 z-30">
            {currentCard.hotspots.map((hotspot, index) => (
              <button
                key={`${currentCard.id}-${index}`}
                type="button"
                aria-label={hotspot.label}
                className={`pointer-events-auto absolute cursor-pointer bg-transparent ${getHotspotShapeClass(
                  hotspot.shape,
                )} focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-white/80`}
                style={{
                  height: hotspot.height,
                  left: hotspot.left,
                  top: hotspot.top,
                  width: hotspot.width,
                }}
                onClick={() => goToCard(hotspot.cardId)}
              >
                <span className="sr-only">{hotspot.label}</span>
              </button>
            ))}
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          Showing interactive card {currentCard.id} of {foodDeliveryCards.length}
        </p>
      </div>
    </main>
  );
}

function getHotspotShapeClass(shape: FoodDeliveryHotspotShape | undefined) {
  if (shape === "card") {
    return "rounded-[28px]";
  }

  if (shape === "circle") {
    return "rounded-full";
  }

  return "rounded-full";
}

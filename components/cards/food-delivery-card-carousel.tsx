"use client";

import { startTransition, useEffect, useRef, useState } from "react";
import {
  defaultCardIndex,
  foodDeliveryCards,
  getFoodDeliveryCardIndex,
  type FoodDeliveryHotspotShape,
  type FoodDeliveryHotspotTransition,
} from "@/components/cards/food-delivery-cards";
import {
  FoodDeliveryReferenceCardImageLayer,
  FoodDeliveryReferenceCardViewport,
} from "@/components/cards/food-delivery-reference-card";

const MENU_STRIP_HEIGHT = 86;
const MENU_STRIP_TOP = 282;
const MENU_SHIFT_DISTANCE = 88;
const MENU_SHIFT_DURATION_MS = 320;

type MenuShiftDirection = "left" | "right";
type ActiveMenuShift = {
  direction: MenuShiftDirection;
  nextIndex: number;
  previousIndex: number;
};

export function FoodDeliveryCardCarousel() {
  const [currentIndex, setCurrentIndex] = useState(defaultCardIndex);
  const [activeMenuShift, setActiveMenuShift] = useState<ActiveMenuShift | null>(
    null,
  );
  const [isMenuShiftRunning, setIsMenuShiftRunning] = useState(false);
  const currentCard = foodDeliveryCards[currentIndex];
  const frameTimerRef = useRef<number | null>(null);
  const settleTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (frameTimerRef.current !== null) {
        window.cancelAnimationFrame(frameTimerRef.current);
      }

      if (settleTimerRef.current !== null) {
        window.clearTimeout(settleTimerRef.current);
      }
    };
  }, []);

  const goToCard = (
    cardId: number,
    transition: FoodDeliveryHotspotTransition = "instant",
  ) => {
    const nextIndex = getFoodDeliveryCardIndex(cardId);

    if (nextIndex === -1 || nextIndex === currentIndex) {
      return;
    }

    if (transition !== "instant") {
      if (frameTimerRef.current !== null) {
        window.cancelAnimationFrame(frameTimerRef.current);
      }

      if (settleTimerRef.current !== null) {
        window.clearTimeout(settleTimerRef.current);
      }

      setActiveMenuShift({
        direction: transition === "slide-left" ? "left" : "right",
        nextIndex,
        previousIndex: currentIndex,
      });
      setIsMenuShiftRunning(false);
      startTransition(() => {
        setCurrentIndex(nextIndex);
      });

      frameTimerRef.current = window.requestAnimationFrame(() => {
        setIsMenuShiftRunning(true);
      });

      settleTimerRef.current = window.setTimeout(() => {
        setActiveMenuShift(null);
        setIsMenuShiftRunning(false);
      }, MENU_SHIFT_DURATION_MS);

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
          <FoodDeliveryReferenceCardViewport>
            <FoodDeliveryReferenceCardImageLayer
              alt={currentCard.alt}
              priority
              src={currentCard.src}
            />
          </FoodDeliveryReferenceCardViewport>

          {activeMenuShift ? (
            <div
              className="pointer-events-none absolute left-0 z-20 w-[360px] overflow-hidden"
              style={{
                height: MENU_STRIP_HEIGHT,
                top: MENU_STRIP_TOP,
              }}
            >
              <div
                className="absolute inset-0 bg-no-repeat"
                style={getMenuStripLayerStyle({
                  direction: activeMenuShift.direction,
                  isRunning: isMenuShiftRunning,
                  layerRole: "previous",
                  src: foodDeliveryCards[activeMenuShift.previousIndex].src,
                })}
              />
              <div
                className="absolute inset-0 bg-no-repeat"
                style={getMenuStripLayerStyle({
                  direction: activeMenuShift.direction,
                  isRunning: isMenuShiftRunning,
                  layerRole: "next",
                  src: foodDeliveryCards[activeMenuShift.nextIndex].src,
                })}
              />
            </div>
          ) : null}

          <div className="pointer-events-none absolute inset-0 z-30">
            {currentCard.hotspots.map((hotspot, index) => (
              <button
                key={`${currentCard.id}-${index}`}
                type="button"
                aria-label={hotspot.label}
                className={`pointer-events-auto absolute cursor-pointer bg-transparent ${getHotspotShapeClass(
                  hotspot.shape,
                )} focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-white/80`}
                disabled={activeMenuShift !== null}
                style={{
                  height: hotspot.height,
                  left: hotspot.left,
                  top: hotspot.top,
                  width: hotspot.width,
                }}
                onClick={() => goToCard(hotspot.cardId, hotspot.transition)}
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

function getMenuStripLayerStyle(
  {
    direction,
    isRunning,
    layerRole,
    src,
  }: {
    direction: MenuShiftDirection;
    isRunning: boolean;
    layerRole: "next" | "previous";
    src: string;
  },
) {
  const offset = direction === "left" ? MENU_SHIFT_DISTANCE : -MENU_SHIFT_DISTANCE;
  const startX = layerRole === "next" ? offset : 0;
  const endX = layerRole === "next" ? 0 : -offset;
  const startOpacity = layerRole === "next" ? 0 : 1;
  const endOpacity = layerRole === "next" ? 1 : 0;

  return {
    backgroundImage: `url(${src})`,
    backgroundPosition: `0px -${MENU_STRIP_TOP}px`,
    backgroundSize: "360px 779px",
    opacity: isRunning ? endOpacity : startOpacity,
    transform: `translate3d(${isRunning ? endX : startX}px, 0, 0)`,
    transition: `transform ${MENU_SHIFT_DURATION_MS}ms cubic-bezier(0.22, 1, 0.36, 1), opacity ${MENU_SHIFT_DURATION_MS}ms ease`,
  };
}

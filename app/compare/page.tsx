import Image from "next/image";
import {
  defaultCardIndex,
  foodDeliveryCards,
} from "@/components/cards/food-delivery-cards";
import { FoodDeliveryReferenceCardCanvas } from "@/components/cards/food-delivery-reference-card";

const currentCard = foodDeliveryCards[defaultCardIndex];

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-[#e6e2e1] px-6 py-8">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold tracking-[-0.04em] text-[#181818]">
            {currentCard.title}
          </h1>
          <p className="max-w-[760px] text-base leading-6 text-[#575250]">
            Left: current implementation. Center: original reference. Right:
            visual difference; the darker it looks, the closer it is to the source image.
          </p>
        </header>

        <section className="grid gap-8 xl:grid-cols-3">
          <CompareBlock label="Live">
            <FoodDeliveryReferenceCardCanvas
              alt={currentCard.alt}
              src={currentCard.src}
            />
          </CompareBlock>

          <CompareBlock label="Reference">
            <div className="relative h-[779px] w-[360px] overflow-hidden rounded-[34px] shadow-[0_28px_64px_rgba(76,60,66,0.26)]">
              <Image
                src={currentCard.src}
                alt={currentCard.alt}
                fill
                priority
                sizes="360px"
                className="object-cover"
              />
            </div>
          </CompareBlock>

          <CompareBlock label="Diff">
            <FoodDeliveryReferenceCardCanvas
              alt={currentCard.alt}
              showReferenceOverlay
              overlayMode="difference"
              overlayOpacity={1}
              src={currentCard.src}
            />
          </CompareBlock>
        </section>
      </div>
    </main>
  );
}

function CompareBlock({
  children,
  label,
}: Readonly<{
  children: React.ReactNode;
  label: string;
}>) {
  return (
    <div className="flex flex-col items-center gap-4">
      <span className="text-sm font-semibold uppercase tracking-[0.24em] text-[#746f6c]">
        {label}
      </span>
      {children}
    </div>
  );
}

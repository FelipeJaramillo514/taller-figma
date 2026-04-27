import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";

type FoodDeliveryReferenceCardProps = {
  alt: string;
  className?: string;
  overlayMode?: "normal" | "difference";
  overlayOpacity?: number;
  priority?: boolean;
  showReferenceOverlay?: boolean;
  style?: CSSProperties;
  src: string;
};

export function FoodDeliveryReferenceCard({
  alt,
  overlayMode = "normal",
  overlayOpacity = 0.55,
  showReferenceOverlay = false,
  src,
}: FoodDeliveryReferenceCardProps) {
  return (
    <main className="min-h-screen bg-[#cfcaca] px-4 py-6">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] items-center justify-center">
        <FoodDeliveryReferenceCardCanvas
          alt={alt}
          overlayMode={overlayMode}
          overlayOpacity={overlayOpacity}
          showReferenceOverlay={showReferenceOverlay}
          src={src}
        />
      </div>
    </main>
  );
}

export function FoodDeliveryReferenceCardCanvas({
  alt,
  className,
  overlayMode = "normal",
  overlayOpacity = 0.55,
  priority = true,
  showReferenceOverlay = false,
  style,
  src,
}: FoodDeliveryReferenceCardProps) {
  return (
    <FoodDeliveryReferenceCardViewport>
      <FoodDeliveryReferenceCardImageLayer
        alt={alt}
        className={className}
        overlayMode={overlayMode}
        overlayOpacity={overlayOpacity}
        priority={priority}
        showReferenceOverlay={showReferenceOverlay}
        src={src}
        style={style}
      />
    </FoodDeliveryReferenceCardViewport>
  );
}

export function FoodDeliveryReferenceCardViewport({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <article className="relative h-[779px] w-[360px] overflow-hidden rounded-[34px] bg-[#f5efed] shadow-[0_28px_64px_rgba(76,60,66,0.26)]">
      {children}
    </article>
  );
}

export function FoodDeliveryReferenceCardImageLayer({
  alt,
  className,
  overlayMode = "normal",
  overlayOpacity = 0.55,
  priority = true,
  showReferenceOverlay = false,
  style,
  src,
}: FoodDeliveryReferenceCardProps) {
  return (
    <div className={`absolute inset-0 ${className ?? ""}`} style={style}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="360px"
        className="object-cover"
      />

      {showReferenceOverlay ? (
        <Image
          src={src}
          alt=""
          fill
          priority={priority}
          sizes="360px"
          className={`pointer-events-none absolute inset-0 z-40 ${
            overlayMode === "difference" ? "mix-blend-difference" : ""
          }`}
          style={{ opacity: overlayOpacity }}
        />
      ) : null}
    </div>
  );
}

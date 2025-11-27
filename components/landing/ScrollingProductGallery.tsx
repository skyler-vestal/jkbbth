"use client";

import { MotionValue, useTransform, motion } from "framer-motion";
import Image from "next/image";

const PRODUCT_IMAGES = [
  "/products/others/fork/img1.jpg",
  "/products/rings/oval/img1.jpg",
  "/products/rings/horseshoe/img1.jpg",
  "/products/necklaces/hand-chain-choker/img1.jpg",
];

interface ScrollingProductGalleryProps {
  scrollYProgress: MotionValue<number>;
}

export default function ScrollingProductGallery({
  scrollYProgress,
}: ScrollingProductGalleryProps) {
  // Map scroll progress (0 to 1) to a vertical translation
  // Start slightly below the view and scroll upwards
  // Adjust these values to control the scroll distance and speed
  const y = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);

  return (
    <div className="absolute inset-0 justify-center items-center">
      <motion.div 
        style={{ y }} 
        className="flex flex-col gap-32 items-center"
      >
        {PRODUCT_IMAGES.map((src, index) => (
          <div
            key={index}
            className="relative w-[400px] h-[400px]"
          >
            <Image
              src={src}
              alt={`Product ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}


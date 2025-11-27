"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/landing-page/background/bg-1.jpeg",
  "/landing-page/background/bg-2.jpeg",
  "/landing-page/background/bg-3.jpeg",
];

export default function BackgroundCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5_000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image}
          className={`transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt={`Background ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
            quality={100}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/10" />
    </div>
  );
}


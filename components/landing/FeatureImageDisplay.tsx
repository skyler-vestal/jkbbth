"use client";

import Image from "next/image";

interface FeatureImageDisplayProps {
  imageSrc: string;
  alt: string;
  className?: string;
}

export default function FeatureImageDisplay({
  imageSrc,
  alt,
}: FeatureImageDisplayProps) {
  return (
    <div className="relative w-full h-full">
      <Image
        src={imageSrc}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        quality={100}
      />
    </div>
  );
}



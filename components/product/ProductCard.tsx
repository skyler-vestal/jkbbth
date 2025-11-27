"use client";

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

interface ProductDetails {
  description: string;
  smaller_details: any[];
}

interface Product {
  name: string;
  category?: string;
  directory?: string;
  image_directory?: string;
  cost: number;
  thumbnail: string;
  hover_image?: string;
  slideshow_images: string[];
  details: ProductDetails;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const directory = product.directory || product.image_directory;
  const basePath = `/products/${directory}`;
  const thumbnailSrc = `${basePath}/${product.thumbnail}`;
  const hoverSrc = product.hover_image ? `${basePath}/${product.hover_image}` : null;

  return (
    <Link href={`/products/${product.category || 'rings'}/${encodeURIComponent(product.name)}`}>
      <div 
        className="group relative flex flex-col gap-4 cursor-pointer"
        onMouseEnter={() => hoverSrc && setIsHovered(true)}
        onMouseLeave={() => hoverSrc && setIsHovered(false)}
      >
        <div className="relative aspect-square w-full overflow-hidden bg-neutral-100">
          <Image
            src={thumbnailSrc}
            alt={product.name}
            fill
            className={`object-cover transition-opacity duration-500 ${isHovered && hoverSrc ? 'opacity-0' : 'opacity-100'}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {hoverSrc && (
            <Image
              src={hoverSrc}
              alt={`${product.name} - Hover`}
              fill
              className={`object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
        </div>
        
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-medium uppercase tracking-wide">{product.name}</h3>
            {product.details?.description && <p className="text-sm text-neutral-500 capitalize">{product.details.description}</p>}
          </div>
          <p className="text-lg font-medium">${product.cost}</p>
        </div>
      </div>
    </Link>
  );
}

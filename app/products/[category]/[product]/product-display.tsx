"use client";

import { Product } from "@/components/product/types";
import { ProductDetails } from "@/components/product/ProductDetails";
import { ProductCarousel } from "@/components/product/ProductCarousel";
import { ProductOrdering } from "@/components/product/ProductOrdering";
import { ProductGallery } from "@/components/product/ProductGallery";

interface ProductDisplayProps {
  product: Product;
}

export default function ProductDisplay({ product }: ProductDisplayProps) {
  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="w-full">
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 overflow-hidden">
        {/* LEFT SECTION: Product Details */}
        <ProductDetails product={product} />

        {/* MIDDLE SECTION: Infinite Carousel */}
        <ProductCarousel product={product} />

        {/* RIGHT SECTION: Ordering Info */}
        <ProductOrdering product={product} />
      </div>
      <ProductGallery product={product} />
    </div>
  );
}

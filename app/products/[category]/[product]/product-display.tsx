"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import yaml from "js-yaml";
import { Product, YamlData } from "@/components/product/types";
import { ProductDetails } from "@/components/product/ProductDetails";
import { ProductCarousel } from "@/components/product/ProductCarousel";
import { ProductOrdering } from "@/components/product/ProductOrdering";
import { ProductGallery } from "@/components/product/ProductGallery";

export default function ProductDisplay() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch("/products/products.yaml");
        const text = await response.text();
        const data = yaml.load(text) as YamlData;

        const category = typeof params.category === 'string' ? params.category : '';
        // Need to decode the product name from the URL
        const productName = typeof params.product === 'string' ? decodeURIComponent(params.product) : '';

        const categoryData = data.products.find((c) => c.category === category);
        if (categoryData) {
          const foundProduct = categoryData.items.find(
            (item) => item.name === productName
          );
          
          if (foundProduct) {
            setProduct(foundProduct);
          }
        }
      } catch (error) {
        console.error("Error loading product:", error);
      }
    }

    fetchProduct();
  }, [params]);

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

import React from 'react';
import ProductCard from '@/components/product/ProductCard';
import { getAllCategories, getCategoryBySlug } from '@/lib/products';

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    category: category.category,
  }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const categoryData = getCategoryBySlug(category);
  const products = categoryData?.items || null;

  if (!products) {
    // You might want to handle this differently, e.g., show all products or a specific error
    return (
      <div className="min-h-screen pt-32 px-8">
        <h1 className="text-4xl font-bold capitalize mb-8">{category}</h1>
        <p>No products found for this category.</p>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen pt-32 px-4 md:px-8 pb-16">
      <h1 className="text-4xl font-bold capitalize mb-12 tracking-tighter">{category}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

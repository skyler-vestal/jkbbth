import React from 'react';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import ProductCard from '@/components/product/ProductCard';

interface Product {
  name: string;
  category?: string;
  directory?: string;
  image_directory?: string;
  cost: number;
  thumbnail: string;
  hover_image?: string;
  slideshow_images: string[];
  details: {
    description: string;
    smaller_details: any[];
  };
}

interface CategoryData {
  category: string;
  items: Product[];
}

interface YamlData {
  products: CategoryData[];
}

async function getProducts(category: string) {
  try {
    const filePath = path.join(process.cwd(), 'public', 'products', 'products.yaml');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = yaml.load(fileContents) as YamlData;
    
    const categoryData = data.products.find(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );

    if (categoryData) {
      // Inject the category into each product object so ProductCard can use it
      return categoryData.items.map(item => ({ ...item, category: categoryData.category }));
    }
    return null;
  } catch (error) {
    console.error('Error reading products.yaml:', error);
    return null;
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const products = await getProducts(category);

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

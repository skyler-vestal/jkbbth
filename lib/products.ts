import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { YamlData, Product } from '@/components/product/types';

const productsFilePath = path.join(process.cwd(), 'public', 'products', 'products.yaml');

export function getProductsData(): YamlData {
  const fileContents = fs.readFileSync(productsFilePath, 'utf8');
  return yaml.load(fileContents) as YamlData;
}

export function getAllCategories() {
  const data = getProductsData();
  return data.products;
}

export function getCategoryBySlug(slug: string) {
  const data = getProductsData();
  const category = data.products.find(
    (c) => c.category.toLowerCase() === slug.toLowerCase()
  );
  
  if (category) {
     // Inject category into items
     return {
       ...category,
       items: category.items.map(item => ({ ...item, category: category.category }))
     };
  }
  return null;
}

export function getProductBySlug(categorySlug: string, productSlug: string) {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return null;

  const decodedProductSlug = decodeURIComponent(productSlug);
  return category.items.find((p) => p.name === decodedProductSlug) || null;
}


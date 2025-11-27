import ProductDisplay from "./product-display";
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { YamlData } from '@/components/product/types';

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), 'public', 'products', 'products.yaml');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = yaml.load(fileContents) as YamlData;

  const params = [];
  for (const category of data.products) {
    for (const item of category.items) {
      params.push({
        category: category.category,
        product: item.name,
      });
    }
  }

  return params;
}

export default function ProductPage() {
  return (
    <div className="pt-32">
      <ProductDisplay />
    </div>
  );
}

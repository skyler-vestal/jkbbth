import ProductDisplay from "./product-display";
import { getAllCategories, getProductBySlug } from '@/lib/products';
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const categories = getAllCategories();
  const params = [];
  for (const category of categories) {
    for (const item of category.items) {
      params.push({
        category: category.category,
        product: item.name,
      });
    }
  }
  return params;
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ category: string; product: string }>;
}) {
  const { category, product: productSlug } = await params;
  const product = getProductBySlug(category, productSlug);

  if (!product) {
    notFound();
  }

  return (
    <div className="pt-32">
      <ProductDisplay product={product} />
    </div>
  );
}

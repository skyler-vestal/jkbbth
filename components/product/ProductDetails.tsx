import { Product } from "./types";

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="h-full p-8 flex flex-col bg-white overflow-y-auto">
      <div className="max-w-md mx-auto w-full space-y-8">
        <div>
          <h1 className="text-4xl font-light tracking-wide uppercase mb-2">{product.name}</h1>
          <div className="h-1 w-20 bg-black mb-6"></div>
          {product.details?.description && (
            <p className="text-lg text-neutral-600 font-light leading-relaxed mb-8">
              {product.details.description}
            </p>
          )}
        </div>

        {product.details?.smaller_details && product.details.smaller_details.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-sm uppercase tracking-widest text-neutral-400 font-medium">Specifications</h3>
            <div className="grid grid-cols-1 gap-3">
              {product.details.smaller_details.map((detail, index) => (
                <div key={index} className="space-y-2">
                  {Object.entries(detail).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-baseline border-b border-neutral-100 pb-1">
                      <span className="text-sm text-neutral-500 capitalize">{key.replace('_', ' ')}</span>
                      <span className="text-sm font-medium text-neutral-800">{String(value)}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


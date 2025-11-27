"use client";

import { useState } from "react";
import { Product } from "./types";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ProductOrderingProps {
  product: Product;
}

export function ProductOrdering({ product }: ProductOrderingProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="h-full p-8 flex flex-col bg-white overflow-y-auto">
      <div className="max-w-md mx-auto w-full space-y-3">
        
        {/* Price Block */}
        <div>
          <p className="text-sm text-neutral-400 uppercase tracking-widest">Price</p>
          <p className="text-3xl font-light">${product.cost.toFixed(2)}</p>
        </div>

        {/* Shipping Block */}
        <div className="space-y-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-2 cursor-help w-fit">
                <p className="text-sm text-neutral-400 uppercase tracking-widest">Shipping</p>
                <span className="text-xs bg-neutral-100 text-neutral-500 px-1.5 py-0.5 rounded-full">?</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Domestic / International Shipping oversea delivery</p>
            </TooltipContent>
          </Tooltip>
          <p className="text-xl font-light">+ ${product.shipping?.toFixed(2) || "10.00"}</p>
        </div>

        <div className="h-px w-full bg-neutral-100"></div>

        {/* Quantity */}
        <div className="space-y-0">
          <label htmlFor="quantity" className="text-sm text-neutral-400 uppercase tracking-widest">Quantity</label>
          <div className="flex items-center border border-neutral-200 w-fit rounded-md">
            <button 
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-4 py-2 hover:bg-neutral-50 transition-colors text-neutral-600"
            >
              -
            </button>
            <span className="w-12 text-center font-medium">{quantity}</span>
            <button 
              onClick={() => setQuantity(quantity + 1)}
              className="px-4 py-2 hover:bg-neutral-50 transition-colors text-neutral-600"
            >
              +
            </button>
          </div>
        </div>

        {/* Total */}
        <div className="flex justify-between items-end pt-4">
          <span className="text-lg font-medium">Total</span>
          <span className="text-2xl font-semibold">
            ${(product.cost * quantity + product.shipping).toFixed(2)}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-4">
          <Button className="w-full h-12 text-lg font-light tracking-wide bg-black hover:bg-neutral-800 text-white rounded-none">
            Buy Now
          </Button>
          <Button variant="outline" className="w-full h-12 text-lg font-light tracking-wide border-black text-black hover:bg-neutral-50 rounded-none">
            Add to Cart
          </Button>
        </div>

      </div>
    </div>
  );
}


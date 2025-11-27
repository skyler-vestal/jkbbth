import { Product } from "./types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface ProductCarouselProps {
  product: Product;
}

export function ProductCarousel({ product }: ProductCarouselProps) {
  const directory = product.directory || product.image_directory;
  const basePath = `/products/${directory}`;

  return (
    <div className="w-full bg-neutral-50">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent className="ml-0">
          {product.slideshow_images.map((image, index) => (
            <CarouselItem className="pl-0" key={index}>
              <div className="relative w-full">
                <img
                  src={`${basePath}/${image}`}
                  alt={`${product.name} view ${index + 1}`}
                  className="w-full max-h-[600px] object-cover block"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}


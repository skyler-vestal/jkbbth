import { Product } from "./types";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DialogTitle } from "@radix-ui/react-dialog";
import { ZoomableImage } from "./ZoomableImage";

interface ProductGalleryProps {
  product: Product;
}

export function ProductGallery({ product }: ProductGalleryProps) {
  if (!product.gallery_images || product.gallery_images.length === 0) {
    return null;
  }

  const directory = product.directory || product.image_directory;
  const basePath = `/products/${directory}`;

  return (
    <div className="w-full bg-white py-12 px-4 md:px-10">
      <div className="max-w-[1800px] mx-auto">
        <h2 className="text-sm uppercase tracking-widest text-neutral-400 mb-12 text-center font-medium">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {product.gallery_images.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div 
                  className="group relative aspect-4/5 overflow-hidden bg-neutral-50 cursor-zoom-in"
                >
                  <img
                    src={`${basePath}/${image}`}
                    alt={`${product.name} gallery view ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5" />
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[90vw] max-h-[90vh] w-fit h-fit p-0 bg-transparent border-none shadow-none sm:max-w-fit [&>button]:text-white [&>button]:bg-black/20 [&>button]:hover:bg-black/40 [&>button]:rounded-full">
                <VisuallyHidden>
                   <DialogTitle>{product.name} gallery image {index + 1}</DialogTitle>
                </VisuallyHidden>
                <ZoomableImage 
                  src={`${basePath}/${image}`}
                  alt={`${product.name} gallery view ${index + 1}`}
                  className="w-auto h-auto max-w-[90vw] max-h-[90vh] object-contain"
                />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
}

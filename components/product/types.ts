export interface Product {
  name: string;
  directory?: string;
  image_directory?: string;
  cost: number;
  shipping: number;
  thumbnail: string;
  hover_image?: string;
  slideshow_images: string[];
  gallery_images?: string[];
  details?: {
    description?: string;
    smaller_details?: Array<{
      [key: string]: any;
    }>;
  };
}

export interface CategoryData {
  category: string;
  items: Product[];
}

export interface YamlData {
  products: CategoryData[];
}

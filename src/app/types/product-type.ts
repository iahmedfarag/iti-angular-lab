export interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  images?: string[];
  discountPercentage?: number;
}

import { Category } from "../category/Category";

export type Product = {
  category?: Category | null;
  createdAt: Date;
  id: string;
  name: string | null;
  price: number | null;
  updatedAt: Date;
};

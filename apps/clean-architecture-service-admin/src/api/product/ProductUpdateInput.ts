import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type ProductUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  name?: string | null;
  price?: number | null;
};
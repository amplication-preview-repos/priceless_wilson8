import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  date?: Date | null;
  total?: number | null;
  user?: UserWhereUniqueInput | null;
};

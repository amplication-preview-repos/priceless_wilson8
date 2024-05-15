import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  date?: Date | null;
  total?: number | null;
  user?: UserWhereUniqueInput | null;
};

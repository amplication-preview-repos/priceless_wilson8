import { OrderUpdateManyWithoutUsersInput } from "./OrderUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  orders?: OrderUpdateManyWithoutUsersInput;
  password?: string | null;
  username?: string | null;
};

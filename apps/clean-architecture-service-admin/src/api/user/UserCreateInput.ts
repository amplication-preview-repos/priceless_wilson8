import { OrderCreateNestedManyWithoutUsersInput } from "./OrderCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  orders?: OrderCreateNestedManyWithoutUsersInput;
  password?: string | null;
  username?: string | null;
};

import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  adress?: SortOrder;
  city?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phone?: SortOrder;
  psc?: SortOrder;
  surname?: SortOrder;
  updatedAt?: SortOrder;
};

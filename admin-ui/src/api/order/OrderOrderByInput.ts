import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  dphId?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  priceIncTax?: SortOrder;
  updatedAt?: SortOrder;
};

import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DphWhereUniqueInput } from "../dph/DphWhereUniqueInput";

export type OrderCreateInput = {
  customer: CustomerWhereUniqueInput;
  dph?: DphWhereUniqueInput | null;
  price: number;
  priceIncTax?: number | null;
};

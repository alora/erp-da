import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DphWhereUniqueInput } from "../dph/DphWhereUniqueInput";

export type Order = {
  createdAt: Date;
  customer?: CustomerWhereUniqueInput;
  dph?: DphWhereUniqueInput | null;
  id: string;
  price: number;
  priceIncTax: number | null;
  updatedAt: Date;
};

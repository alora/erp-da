import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DphWhereUniqueInput } from "../dph/DphWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OrderWhereInput = {
  customer?: CustomerWhereUniqueInput;
  dph?: DphWhereUniqueInput;
  id?: StringFilter;
  price?: FloatFilter;
  priceIncTax?: FloatNullableFilter;
};

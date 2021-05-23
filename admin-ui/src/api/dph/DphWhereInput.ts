import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";

export type DphWhereInput = {
  id?: StringFilter;
  popis?: StringFilter;
  sazba?: FloatFilter;
};

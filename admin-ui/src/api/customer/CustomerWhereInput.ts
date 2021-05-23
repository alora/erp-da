import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CustomerWhereInput = {
  adress?: StringNullableFilter;
  city?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
  psc?: StringNullableFilter;
  surname?: StringNullableFilter;
};

import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ListProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { DPH_TITLE_FIELD } from "./DphTitle";

export const DphShow = (props: ListProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="popis" source="popis" />
        <TextField label="sazba" source="sazba" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Order" target="DphId" label="Orders">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="customer"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="dph" source="dph.id" reference="Dph">
              <TextField source={DPH_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="price" source="price" />
            <TextField label="price_inc_tax" source="priceIncTax" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

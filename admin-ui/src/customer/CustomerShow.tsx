import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ListProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CUSTOMER_TITLE_FIELD } from "./CustomerTitle";
import { DPH_TITLE_FIELD } from "../dph/DphTitle";

export const CustomerShow = (props: ListProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="adress" source="adress" />
        <TextField label="city" source="city" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="phone" source="phone" />
        <TextField label="psc" source="psc" />
        <TextField label="surname" source="surname" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Order"
          target="CustomerId"
          label="Orders"
        >
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

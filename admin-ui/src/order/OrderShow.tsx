import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { DPH_TITLE_FIELD } from "../dph/DphTitle";

export const OrderShow = (props: ListProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};

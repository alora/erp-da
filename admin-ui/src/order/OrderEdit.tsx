import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { CustomerTitle } from "../customer/CustomerTitle";
import { DphTitle } from "../dph/DphTitle";

export const OrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <ReferenceInput source="dph.id" reference="Dph" label="dph">
          <SelectInput optionText={DphTitle} />
        </ReferenceInput>
        <NumberInput label="price" source="price" />
        <NumberInput label="price_inc_tax" source="priceIncTax" />
      </SimpleForm>
    </Edit>
  );
};

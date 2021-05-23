import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CustomerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="adress" source="adress" />
        <TextInput label="city" source="city" />
        <TextInput label="email" source="email" />
        <TextInput label="name" source="name" />
        <TextInput label="phone" source="phone" />
        <TextInput label="psc" source="psc" />
        <TextInput label="surname" source="surname" />
      </SimpleForm>
    </Edit>
  );
};

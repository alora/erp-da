import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CustomerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="adress" source="adress" />
        <TextInput label="city" source="city" />
        <TextInput label="email" source="email" />
        <TextInput label="name" source="name" />
        <TextInput label="phone" source="phone" />
        <TextInput label="psc" source="psc" />
        <TextInput label="surname" source="surname" />
      </SimpleForm>
    </Create>
  );
};

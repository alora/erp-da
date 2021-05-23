import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const DphCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="popis" source="popis" />
        <NumberInput label="sazba" source="sazba" />
      </SimpleForm>
    </Create>
  );
};

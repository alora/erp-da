import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const DphEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="popis" source="popis" />
        <NumberInput label="sazba" source="sazba" />
      </SimpleForm>
    </Edit>
  );
};

import {useFormikContext} from 'formik';
import React from 'react';
import {Box, Text, Button} from '@ui/components';
import FieldInput from '@components/forms/FieldInput';
import {formKeys, forms} from '../constants/form';

const CreateEditMemberFormComponent = () => {
  const {handleSubmit} = useFormikContext<any>();

  return (
    <Box>
      <Text>Información del Miembro</Text>
      <FieldInput
        isRequired
        name={formKeys.createEditMember.name}
        label={forms.createEditMember.labels[formKeys.createEditMember.name]}
        returnKeyType="next"
        mt="m"
      />

      <FieldInput
        isRequired
        name={formKeys.createEditMember.dni}
        label={forms.createEditMember.labels[formKeys.createEditMember.dni]}
        returnKeyType="next"
        mt="m"
      />

      <FieldInput
        isRequired
        name={formKeys.createEditMember.email}
        label={forms.createEditMember.labels[formKeys.createEditMember.email]}
        returnKeyType="next"
        mt="m"
      />

      <FieldInput
        isRequired
        name={formKeys.createEditMember.phone}
        label={forms.createEditMember.labels[formKeys.createEditMember.phone]}
        returnKeyType="next"
        mt="m"
      />

      <FieldInput
        isRequired
        name={formKeys.createEditMember.siteAddress}
        label={
          forms.createEditMember.labels[formKeys.createEditMember.siteAddress]
        }
        returnKeyType="next"
        mt="m"
      />

      <Button
        variant="solid"
        mt="s"
        mb="xl"
        onPress={handleSubmit.bind(null, undefined)}>
        Guardar
      </Button>
    </Box>
  );
};

export default CreateEditMemberFormComponent;

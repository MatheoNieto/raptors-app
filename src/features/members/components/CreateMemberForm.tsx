import {useFormikContext} from 'formik';
import React from 'react';
import {Box, Text, Button} from '@ui/components';
import FieldInput from '@components/forms/FieldInput';
import {formKeys, forms} from '../constants/form';
import FieldSelect from '@components/forms/FieldSelect';
import {EpsMapper} from '../data/mappers/EpsMapper';
import {bloodTypes, EPS, gender} from '../constants';
import FieldDate from '@components/forms/FieldDate';
import {GenderMapper} from '../data/mappers/genderMapper';
import {BloodTypeMapper} from '../data/mappers/bloodTypeMapper';

const CreateEditMemberFormComponent = () => {
  const {handleSubmit, isValid} = useFormikContext<any>();

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
      <FieldSelect
        name={formKeys.createEditMember.serviceHealth}
        label={
          forms.createEditMember.labels[formKeys.createEditMember.serviceHealth]
        }
        data={EpsMapper.toOption(EPS)}
        labelField={'label'}
        valueField={'value'}
        isRequired
      />

      <FieldDate
        isRequired
        name={formKeys.createEditMember.birthDate}
        label={
          forms.createEditMember.labels[formKeys.createEditMember.birthDate]
        }
        returnKeyType="next"
        mt="m"
      />

      <FieldSelect
        name={formKeys.createEditMember.gender}
        label={forms.createEditMember.labels[formKeys.createEditMember.gender]}
        data={GenderMapper.toOption(gender)}
        labelField={'label'}
        search={false}
        valueField={'value'}
        isRequired
      />

      <FieldSelect
        name={formKeys.createEditMember.bloodTypes}
        label={
          forms.createEditMember.labels[formKeys.createEditMember.bloodTypes]
        }
        data={BloodTypeMapper.toOption(bloodTypes)}
        labelField={'label'}
        search={false}
        valueField={'value'}
        isRequired
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
        isDisabled={!isValid}
        onPress={handleSubmit.bind(null, undefined)}>
        Guardar
      </Button>
    </Box>
  );
};

export default CreateEditMemberFormComponent;

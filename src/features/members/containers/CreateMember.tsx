import {Box} from '@ui/components';
import {Formik} from 'formik';
import React from 'react';
import {forms} from '../constants/form';
import CreateEditMemberFormComponent from '../components/CreateMemberForm';
import {useAppDispatch} from '@hooks/useStore';
import {memberActions} from '@store/members';
import * as Yup from 'yup';
import {MemberMapper} from '@store/data/mappers/memberMapper';

export const CreateMember = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (
    values: Yup.InferType<typeof forms.createEditMember.schema>,
  ) => {
    dispatch(memberActions.addMember({member: MemberMapper.toDTO(values)}));
  };

  return (
    <Box flex={1} p="m" pt="xl" backgroundColor="white">
      <Formik
        initialValues={forms.createEditMember.initialValues}
        initialErrors={forms.createEditMember.initialErrors}
        validationSchema={forms.createEditMember.schema}
        onSubmit={handleSubmit}>
        <CreateEditMemberFormComponent />
      </Formik>
    </Box>
  );
};

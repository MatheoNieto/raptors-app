import {Box, ScrollBox} from '@ui/components';
import {Formik} from 'formik';
import React from 'react';
import {forms} from '../constants/form';
import CreateEditMemberFormComponent from '../components/CreateMemberForm';
import {useAppDispatch} from '@hooks/useStore';
import {memberActions} from '@store/members';
import * as Yup from 'yup';
import {MemberMapper} from '@store/data/mappers/memberMapper';
import {MembersStackProps, RoutesMembers} from '../navigation/types';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export const CreateMember = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<MembersStackProps>();

  const handleSubmit = (
    values: Yup.InferType<typeof forms.createEditMember.schema>,
  ) => {
    dispatch(memberActions.addMember({member: MemberMapper.toDTO(values)}));
    navigation.navigate(RoutesMembers.LIST_MEMBERS);
  };

  return (
    <ScrollBox
      as={KeyboardAwareScrollView}
      keyboardShouldPersistTaps="handled"
      enableOnAndroid
      showsVerticalScrollIndicator={false}>
      <Box p="m" backgroundColor="white" flex={1}>
        <Formik
          initialValues={forms.createEditMember.initialValues}
          initialErrors={forms.createEditMember.initialErrors}
          validationSchema={forms.createEditMember.schema}
          onSubmit={handleSubmit}>
          <CreateEditMemberFormComponent />
        </Formik>
      </Box>
    </ScrollBox>
  );
};

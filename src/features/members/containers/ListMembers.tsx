import {useNavigation} from '@react-navigation/native';
import {Box, Button, Text} from '@ui/components';
import React from 'react';
import {MembersStackProps, RoutesMembers} from '../navigation/types';

export const ListMembers = () => {
  const navigation = useNavigation<MembersStackProps>();
  return (
    <Box>
      <Text>List Members Screen</Text>

      <Button onPress={() => navigation.navigate(RoutesMembers.CREATE_MEMBER)}>
        Crear Miembro
      </Button>
    </Box>
  );
};

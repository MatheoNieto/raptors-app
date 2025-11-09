import {useNavigation} from '@react-navigation/native';
import {Box, Button, Text} from '@ui/components';
import React from 'react';
import {MembersStackProps, RoutesMembers} from '../navigation/types';
import {useAppSelector} from '@hooks/useStore';
import {membersListSelector} from '@store/members/selectors';
import {FlatList} from 'react-native';
import CardMember from '../components/CardMember';

export const ListMembers = () => {
  const members = useAppSelector(state => membersListSelector(state));
  const navigation = useNavigation<MembersStackProps>();

  console.log('Members:', members);
  return (
    <Box pt="m">
      <FlatList
        data={members}
        keyExtractor={item => item.dni.toString()}
        renderItem={({item}) => <CardMember member={item} />}
      />

      <Button
        m="m"
        variant="solid"
        onPress={() => navigation.navigate(RoutesMembers.CREATE_MEMBER)}>
        Crear Miembro
      </Button>
    </Box>
  );
};

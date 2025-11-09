import React from 'react';
import {BaseTouchable, Box, Card, Text} from '@ui/components';
import {MembersDTO} from '@store/data/dto/membersDTO';
import {useNavigation} from '@react-navigation/native';
import {MembersStackProps, RoutesMembers} from '../navigation/types';

type Props = {
  member: MembersDTO;
};
const CardJobComponent: React.FC<Props> = ({member}) => {
  const navigation = useNavigation<MembersStackProps>();
  return (
    <Card
      as={BaseTouchable}
      onPress={() =>
        navigation.navigate(RoutesMembers.DETAIL_MEMBER, {
          memberId: member.id,
        })
      }>
      <Box>
        <Text>{member.name}</Text>
        <Text>Documento: {member.dni}</Text>
        <Text>email: {member.email}</Text>
      </Box>
    </Card>
  );
};

export default CardJobComponent;

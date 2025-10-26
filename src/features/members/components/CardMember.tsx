import React from 'react';
import {Box, Card, Text} from '@ui/components';
import {MembersDTO} from '@store/data/dto/membersDTO';

type Props = {
  member: MembersDTO;
};
const CardJobComponent: React.FC<Props> = ({member}) => {
  return (
    <Card>
      <Box>
        <Text>{member.name}</Text>
        <Text>Documento: {member.dni}</Text>
        <Text>email: {member.email}</Text>
      </Box>
    </Card>
  );
};

export default CardJobComponent;

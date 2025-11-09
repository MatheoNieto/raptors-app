import {useAppSelector} from '@hooks/useStore';
import {MembersDTO} from '@store/data/dto/membersDTO';
import {memberDataSelector} from '@store/members';
import {Box, Text} from '@ui/components';
import React from 'react';

type Props = {
  memberId: MembersDTO['id'];
};

const DetailMember: React.FC<Props> = ({memberId}) => {
  const membersData = useAppSelector(state =>
    memberDataSelector(state, memberId),
  );

  console.log('==>membersData', JSON.stringify(membersData));
  if (!membersData)
    return (
      <Box>
        <Text>Error...</Text>
      </Box>
    );
  return (
    <Box p="m">
      <Text variant="regularMedium">Nombre: {membersData.name}</Text>
      <Text variant="regularMedium">
        Documento de Identidad: {membersData.dni}
      </Text>
      <Text variant="regularMedium">Eps: {membersData.serviceHealth}</Text>
      <Text variant="regularMedium">Sangre: {membersData.bloodTypes}</Text>
      <Text variant="regularMedium">
        Fecha de nacimiento: {membersData.birthDate}
      </Text>
      <Text variant="regularMedium">Dirección: {membersData.siteAddress}</Text>
      <Text variant="regularMedium">Correo: {membersData.email}</Text>
      <Text variant="regularMedium">Telefono: {membersData.phone}</Text>
    </Box>
  );
};

export default DetailMember;

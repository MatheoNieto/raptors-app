import { MembersStack } from '../../features/members/navigation/Stack';
import { StackPublicDefinitions } from './types';

export const routes = {
  [StackPublicDefinitions.MEMBERS]: {
    name: StackPublicDefinitions.MEMBERS,
    component: MembersStack,
  },
};
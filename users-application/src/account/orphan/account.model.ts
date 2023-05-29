import { createUnionType, Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Company } from '../company/models/company.model';
import { User } from '../users/models/user.model';

export const Account = createUnionType({
  name: 'Account',
  types: () => [User, Company] as const,
  resolveType(value) {
    if (value.type === 'user') {
      return User;
    }
    if (value.type === 'company') {
      return Company;
    }
    return null;
  },
});

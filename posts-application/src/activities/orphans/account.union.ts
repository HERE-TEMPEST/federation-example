import { createUnionType, Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Company } from './company.model';
import { User } from './user.model';

export const Account = createUnionType({
  name: 'Account',
  types: () => [User, Company] as const,
  resolveType(value) {
    console.log(value)
    if (value.__typename === 'User') {
      return User;
    }
    if (value.__typename === 'Company') {
      return Company;
    }
    return null;
  },
});

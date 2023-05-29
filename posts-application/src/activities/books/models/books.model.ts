import { Directive, Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Account } from 'src/activities/orphans/account.union';
import { User } from '../../orphans/user.model';

@ObjectType()
@Directive('@key(fields: "id")')
export class Book {
  @Field((type) => ID)
  id: number;

  @Field()
  name: string;

  @Field((type) => Int)
  authorId: number;

  @Field()
  authorType: string;

  @Field((type) => Account)
  account?: typeof Account;
}

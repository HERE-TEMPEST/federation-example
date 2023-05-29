import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class Company {
  @Field((type) => ID)
  id: number;

  @Field()
  name: string;
}

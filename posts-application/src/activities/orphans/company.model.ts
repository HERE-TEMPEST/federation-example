import { createUnionType, Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Book } from '../books/models/books.model';
import { Post } from '../posts/models/post.model';
import { Activities } from './activities.union';

@ObjectType()
@Directive('@key(fields: "id")')
export class Company {
  @Field((type) => ID)
  id: number;

  @Field((type) => [Activities])
  activities?: [typeof Activities];
}

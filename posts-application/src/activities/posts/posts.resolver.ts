import {
  Args,
  ID,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Post } from './models/post.model';
import { User } from '../orphans/user.model';
import { PostsService } from './posts.service';
import { ParseIntPipe } from '@nestjs/common';
import { Account } from '../orphans/account.union';

@Resolver((of) => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query((returns) => Post)
  post(@Args({ name: 'id', type: () => ID }, ParseIntPipe) id: number): Post {
    return this.postsService.findOne(id);
  }

  @Query((returns) => [Post])
  posts(): Post[] {
    return this.postsService.findAll();
  }

  @ResolveField((of) => Account)
  account(@Parent() post: Post): any {
    if (post.authorType === 'user') {
      return { __typename: 'User', id: post.authorId };
    }
    if (post.authorType === 'company') {
      return { __typename: 'Company', id: post.authorId };
    }
  }
}

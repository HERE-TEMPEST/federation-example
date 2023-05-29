import { Module } from '@nestjs/common';
import { PostsResolver } from './posts.resolver';
import { PostsService } from './posts.service';
import { UsersResolver } from '../orphans/users.resolver';

@Module({
  imports: [],
  exports: [PostsService],
  providers: [PostsService, PostsResolver],
})
export class PostsModule {}

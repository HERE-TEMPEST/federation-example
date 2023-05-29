import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Post } from '../posts/models/post.model';
import { User } from './user.model';
import { PostsService } from '../posts/posts.service';
import { BooksService } from '../books/books.service';
import { Activities } from './activities.union';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly postsService: PostsService, private readonly booksService: BooksService) {}

  @ResolveField((of) => [Activities])
  public activities(@Parent() user: User): (typeof Activities)[] {
    const posts = this.postsService.findAllByAuthorId(user.id);
    const books = this.booksService.findAllByAuthorId(user.id);

    console.log({
      books,
      posts
    })

    return [...books, ...posts]
  }
}

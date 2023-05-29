import { createUnionType } from '@nestjs/graphql';
import { Book } from '../books/models/books.model';
import { Post } from '../posts/models/post.model';

export const Activities = createUnionType({
  name: 'Activities',
  types: () => [Post, Book] as const,
  resolveType(value, req, info) {
    // console.log(info.variableValues)
    if (value.title) {
      return Post;
    }
    if (value.name) {
      return Book;
    }
    return null;
  },
});

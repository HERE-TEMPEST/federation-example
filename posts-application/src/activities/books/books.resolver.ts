import {
  Args,
  ID,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Book } from './models/books.model';
import { User } from '../orphans/user.model';
import { BooksService } from './books.service';
import { ParseIntPipe } from '@nestjs/common';
import { Account } from '../orphans/account.union';

@Resolver((of) => Book)
export class BooksResolver {
  constructor(private readonly booksService: BooksService) {}

  @Query((returns) => Book)
  book(@Args({ name: 'id', type: () => ID }, ParseIntPipe) id: number): Book {
    return this.booksService.findOne(id);
  }

  @Query((returns) => [Book])
  books(): Book[] {
    return this.booksService.findAll();
  }

  @ResolveField((of) => Account)
  account(@Parent() book: Book): any {
    if (book.authorType === 'user') {
      return { __typename: 'User', id: book.authorId };
    }
    if (book.authorType === 'company') {
      return { __typename: 'Company', id: book.authorId };
    }
  }
}

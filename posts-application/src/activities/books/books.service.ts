import { Injectable } from '@nestjs/common';
import { Book } from './models/books.model';

@Injectable()
export class BooksService {
  private Books: Book[] = [
    { authorId: 1, id: 1, authorType: 'company', name: 'Lorem Ipsum' },
    { authorId: 1, id: 2, authorType: 'user', name: 'Foo' },
    { authorId: 2, id: 3, authorType: 'user', name: 'Bar' },
    { authorId: 2, id: 4, authorType: 'company', name: 'Hello World' },
  ];

  findAllByAuthorId(authorId: number): Book[] {
    return this.Books.filter((Book) => Book.authorId === Number(authorId));
  }

  findOne(BookId: number): Book {
    return this.Books.find((Book) => Book.id === BookId);
  }

  findAll(): Book[] {
    return this.Books;
  }
}

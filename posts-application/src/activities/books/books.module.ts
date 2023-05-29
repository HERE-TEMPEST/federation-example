import { Module } from '@nestjs/common';
import { BooksResolver } from './books.resolver';
import { BooksService } from './books.service';

@Module({
  imports: [],
  exports: [BooksService],
  providers: [BooksService, BooksResolver],
})
export class BooksModule {}

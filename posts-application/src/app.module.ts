import { ApolloFederationDriverConfig, ApolloFederationDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './activities/orphans/user.model';
import { UsersResolver } from './activities/orphans/users.resolver';
import { PostsModule } from './activities/posts/posts.module';
import { BooksModule } from './activities/books/books.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
      buildSchemaOptions: {
        orphanedTypes: [User],
      },
    }),
    PostsModule,
    BooksModule
  ],
  controllers: [AppController],
  providers: [AppService, UsersResolver],
})
export class AppModule {}

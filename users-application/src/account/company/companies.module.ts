import { Module } from '@nestjs/common';
import { CompaniesResolver } from './companies.resolver';
import { CompaniesService } from './companies.service';

@Module({
  providers: [CompaniesResolver, CompaniesService],
  imports: [],
})
export class CompaniesModule {}

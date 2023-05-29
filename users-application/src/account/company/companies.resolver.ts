import { Args, ID, Query, Resolver, ResolveReference } from '@nestjs/graphql';
import { Company } from './models/company.model';
import { CompaniesService } from './companies.service';

@Resolver((of) => Company)
export class CompaniesResolver {
  constructor(private CompaniesService: CompaniesService) {}

  @Query((returns) => Company)
  getCompany(@Args({ name: 'id', type: () => ID }) id: number): Company {
    return this.CompaniesService.findById(id);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: number }): Company {
    console.log('resolveReference', { reference })
    return this.CompaniesService.findById(reference.id);
  }
}

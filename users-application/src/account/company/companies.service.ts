import { Injectable } from '@nestjs/common';
import { Company } from './models/company.model';

@Injectable()
export class CompaniesService {
  private Companies: Company[] = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Richard Roe' },
  ];

  findById(id: number): Company {
    return this.Companies.find((user) => user.id === Number(id));
  }
}

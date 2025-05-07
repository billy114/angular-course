import { TestBed } from '@angular/core/testing';

import { OperationsArithmetiquesService } from './operations-arithmetiques.service';

describe('OperationsArithmetiquesService', () => {
  let service: OperationsArithmetiquesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperationsArithmetiquesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

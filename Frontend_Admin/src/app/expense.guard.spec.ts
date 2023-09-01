import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { expenseGuard } from './expense.guard';

describe('expenseGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => expenseGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

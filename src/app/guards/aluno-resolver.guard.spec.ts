import { TestBed } from '@angular/core/testing';

import { AlunoResolverGuard } from './aluno-resolver.guard';

describe('AlunoResolverGuard', () => {
  let guard: AlunoResolverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AlunoResolverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

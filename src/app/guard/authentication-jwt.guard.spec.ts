import { TestBed } from '@angular/core/testing';

import { AuthenticationJwtGuard } from './authentication-jwt.guard';

describe('AuthenticationJwtGuard', () => {
  let guard: AuthenticationJwtGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthenticationJwtGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

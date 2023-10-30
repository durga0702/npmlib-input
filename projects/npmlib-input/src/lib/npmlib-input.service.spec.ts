import { TestBed } from '@angular/core/testing';

import { NpmlibInputService } from './npmlib-input.service';

describe('NpmlibInputService', () => {
  let service: NpmlibInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NpmlibInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

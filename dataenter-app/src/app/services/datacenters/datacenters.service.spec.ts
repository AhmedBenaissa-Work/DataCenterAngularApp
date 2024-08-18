import { TestBed } from '@angular/core/testing';

import { DatacentersService } from './datacenters.service';

describe('DatacentersService', () => {
  let service: DatacentersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatacentersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

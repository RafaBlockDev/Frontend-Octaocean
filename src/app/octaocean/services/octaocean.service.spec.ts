import { TestBed } from '@angular/core/testing';

import { OctaoceanService } from './octaocean.service';

describe('OctaoceanService', () => {
  let service: OctaoceanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OctaoceanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

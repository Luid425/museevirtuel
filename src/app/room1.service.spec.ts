import { TestBed } from '@angular/core/testing';

import { Room1Service } from './room1.service';

describe('Room1Service', () => {
  let service: Room1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Room1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ListstoreService } from './liststore.service';

describe('ListstoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListstoreService = TestBed.get(ListstoreService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ItemstoreService } from './itemstore.service';

describe('ItemstoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemstoreService = TestBed.get(ItemstoreService);
    expect(service).toBeTruthy();
  });
});

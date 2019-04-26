import { TestBed } from '@angular/core/testing';

import { ProjectstoreService } from './projectstore.service';

describe('ProjectstoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectstoreService = TestBed.get(ProjectstoreService);
    expect(service).toBeTruthy();
  });
});

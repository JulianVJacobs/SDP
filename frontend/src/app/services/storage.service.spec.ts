import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';

describe('StorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StorageService = TestBed.get(StorageService);
    expect(service).toBeTruthy();
  });

  it('should call store()', () => {
    const service: StorageService = TestBed.get(StorageService);
    service.store("","");
    expect(service).toBeTruthy();
  });

  it('should call get()', () => {
    const service: StorageService = TestBed.get(StorageService);
    service.get("");
    expect(service).toBeTruthy();
  });

  it('should call removeItem()', () => {
    const service: StorageService = TestBed.get(StorageService);
    service.removeItem("");
    expect(service).toBeTruthy();
  });

  it('should call clear()', () => {
    const service: StorageService = TestBed.get(StorageService);
    service.clear();
    expect(service).toBeTruthy();
  });
});

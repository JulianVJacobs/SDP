import { TestBed } from '@angular/core/testing';

import { ToastService } from './toast.service';

describe('ToastService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToastService = TestBed.get(ToastService);
    expect(service).toBeTruthy();
  });

  it('should have a presentToast()', () => {
    const service: ToastService = TestBed.get(ToastService);
    service.presentToast("");
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { NgxOffersCardGjorgievskaEmilijaService } from './ngx-offers-card-gjorgievska-emilija.service';

describe('NgxOffersCardGjorgievskaEmilijaService', () => {
  let service: NgxOffersCardGjorgievskaEmilijaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxOffersCardGjorgievskaEmilijaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

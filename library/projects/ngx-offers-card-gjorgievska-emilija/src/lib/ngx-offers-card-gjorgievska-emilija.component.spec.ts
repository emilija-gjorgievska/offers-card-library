import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxOffersCardGjorgievskaEmilijaComponent } from './ngx-offers-card-gjorgievska-emilija.component';

describe('NgxOffersCardGjorgievskaEmilijaComponent', () => {
  let component: NgxOffersCardGjorgievskaEmilijaComponent;
  let fixture: ComponentFixture<NgxOffersCardGjorgievskaEmilijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxOffersCardGjorgievskaEmilijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxOffersCardGjorgievskaEmilijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

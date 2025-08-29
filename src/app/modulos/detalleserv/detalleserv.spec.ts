import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalleserv } from './detalleserv';

describe('Detalleserv', () => {
  let component: Detalleserv;
  let fixture: ComponentFixture<Detalleserv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Detalleserv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Detalleserv);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

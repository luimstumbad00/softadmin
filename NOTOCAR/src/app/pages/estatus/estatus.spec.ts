import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Estatus } from './estatus';

describe('Estatus', () => {
  let component: Estatus;
  let fixture: ComponentFixture<Estatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Estatus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Estatus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

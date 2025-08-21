import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loginc } from './loginc';

describe('Loginc', () => {
  let component: Loginc;
  let fixture: ComponentFixture<Loginc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loginc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loginc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

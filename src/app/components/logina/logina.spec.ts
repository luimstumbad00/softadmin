import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Logina } from './logina';

describe('Logina', () => {
  let component: Logina;
  let fixture: ComponentFixture<Logina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Logina]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Logina);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

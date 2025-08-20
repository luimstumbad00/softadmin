import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Generalc } from './generalc';

describe('Generalc', () => {
  let component: Generalc;
  let fixture: ComponentFixture<Generalc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Generalc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Generalc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

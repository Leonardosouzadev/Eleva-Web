import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loginform } from './loginform';

describe('Loginform', () => {
  let component: Loginform;
  let fixture: ComponentFixture<Loginform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loginform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loginform);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

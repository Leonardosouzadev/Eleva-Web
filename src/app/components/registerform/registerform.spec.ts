import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registerform } from './registerform';

describe('Registerform', () => {
  let component: Registerform;
  let fixture: ComponentFixture<Registerform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Registerform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Registerform);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

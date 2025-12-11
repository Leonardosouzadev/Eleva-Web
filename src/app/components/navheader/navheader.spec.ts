import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navheader } from './navheader';

describe('Navheader', () => {
  let component: Navheader;
  let fixture: ComponentFixture<Navheader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navheader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navheader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

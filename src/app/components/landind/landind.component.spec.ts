import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandindComponent } from './landind.component';

describe('LandindComponent', () => {
  let component: LandindComponent;
  let fixture: ComponentFixture<LandindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

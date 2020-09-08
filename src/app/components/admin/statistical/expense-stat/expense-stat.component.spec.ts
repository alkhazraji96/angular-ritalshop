import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseStatComponent } from './expense-stat.component';

describe('ExpenseStatComponent', () => {
  let component: ExpenseStatComponent;
  let fixture: ComponentFixture<ExpenseStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

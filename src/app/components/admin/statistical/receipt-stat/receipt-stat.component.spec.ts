import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptStatComponent } from './receipt-stat.component';

describe('ReceiptStatComponent', () => {
  let component: ReceiptStatComponent;
  let fixture: ComponentFixture<ReceiptStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

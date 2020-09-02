import { TestBed } from '@angular/core/testing';

import { OrderSubmitService } from './order-submit.service';

describe('OrderSubmitService', () => {
  let service: OrderSubmitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderSubmitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

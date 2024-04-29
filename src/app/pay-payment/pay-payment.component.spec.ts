import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayPaymentComponent } from './pay-payment.component';

describe('PayPaymentComponent', () => {
  let component: PayPaymentComponent;
  let fixture: ComponentFixture<PayPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PayPaymentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PayPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

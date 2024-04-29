import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StraCertificateComponent } from './stra-certificate.component';

describe('StraCertificateComponent', () => {
  let component: StraCertificateComponent;
  let fixture: ComponentFixture<StraCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StraCertificateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StraCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

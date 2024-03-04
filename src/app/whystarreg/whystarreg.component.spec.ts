import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhystarregComponent } from './whystarreg.component';

describe('WhystarregComponent', () => {
  let component: WhystarregComponent;
  let fixture: ComponentFixture<WhystarregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhystarregComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhystarregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

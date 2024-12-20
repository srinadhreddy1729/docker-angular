import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinueShoppingComponent } from './continue-shopping.component';

describe('ContinueShoppingComponent', () => {
  let component: ContinueShoppingComponent;
  let fixture: ComponentFixture<ContinueShoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContinueShoppingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContinueShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

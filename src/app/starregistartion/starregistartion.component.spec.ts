import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarregistartionComponent } from './starregistartion.component';

describe('StarregistartionComponent', () => {
  let component: StarregistartionComponent;
  let fixture: ComponentFixture<StarregistartionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarregistartionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StarregistartionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

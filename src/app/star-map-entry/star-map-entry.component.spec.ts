import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarMapEntryComponent } from './star-map-entry.component';

describe('StarMapEntryComponent', () => {
  let component: StarMapEntryComponent;
  let fixture: ComponentFixture<StarMapEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StarMapEntryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StarMapEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindyoustarComponent } from './findyoustar.component';

describe('FindyoustarComponent', () => {
  let component: FindyoustarComponent;
  let fixture: ComponentFixture<FindyoustarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindyoustarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindyoustarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

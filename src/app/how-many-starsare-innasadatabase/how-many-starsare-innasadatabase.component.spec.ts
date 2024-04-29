import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowManyStarsareInnasadatabaseComponent } from './how-many-starsare-innasadatabase.component';

describe('HowManyStarsareInnasadatabaseComponent', () => {
  let component: HowManyStarsareInnasadatabaseComponent;
  let fixture: ComponentFixture<HowManyStarsareInnasadatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HowManyStarsareInnasadatabaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HowManyStarsareInnasadatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

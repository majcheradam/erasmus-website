import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComHomeSectionComponent } from './com-home-section.component';

describe('ComHomeSectionComponent', () => {
  let component: ComHomeSectionComponent;
  let fixture: ComponentFixture<ComHomeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComHomeSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComHomeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

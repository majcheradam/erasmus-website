import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComSubpageSectionComponent } from './com-subpage-section.component';

describe('ComSubpageSectionComponent', () => {
  let component: ComSubpageSectionComponent;
  let fixture: ComponentFixture<ComSubpageSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComSubpageSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComSubpageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

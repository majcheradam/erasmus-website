import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComMainPageComponent } from './com-main-page.component';

describe('ComMainPageComponent', () => {
  let component: ComMainPageComponent;
  let fixture: ComponentFixture<ComMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComHeroComponent } from './com-hero.component';

describe('ComHeroComponent', () => {
  let component: ComHeroComponent;
  let fixture: ComponentFixture<ComHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

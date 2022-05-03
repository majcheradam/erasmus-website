import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComLiveInValladolidComponent } from './com-live-in-valladolid.component';

describe('ComLiveInValladolidComponent', () => {
  let component: ComLiveInValladolidComponent;
  let fixture: ComponentFixture<ComLiveInValladolidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComLiveInValladolidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComLiveInValladolidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComFooterComponent } from './com-footer.component';

describe('ComFooterComponent', () => {
  let component: ComFooterComponent;
  let fixture: ComponentFixture<ComFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

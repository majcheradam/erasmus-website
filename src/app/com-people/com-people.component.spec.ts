import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComPeopleComponent } from './com-people.component';

describe('ComPeopleComponent', () => {
  let component: ComPeopleComponent;
  let fixture: ComponentFixture<ComPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComPeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

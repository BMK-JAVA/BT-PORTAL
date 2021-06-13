import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayLessonsComponent } from './today-lessons.component';

describe('TodayLessonsComponent', () => {
  let component: TodayLessonsComponent;
  let fixture: ComponentFixture<TodayLessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayLessonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

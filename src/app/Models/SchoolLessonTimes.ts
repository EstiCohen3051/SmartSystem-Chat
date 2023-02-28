import { Time } from '@angular/common';

class SchoolLessonTimes {
  SchoolLessonTimesNumber: number;
  LessonNumber: number;
  SchoolNumber: number;
  StartTime: Time;
  EndTime: Time;
  /**
   *
   */
  constructor(
    SchoolLessonTimesNumber: number,
    LessonNumber: number,
    SchoolNumber: number,
    StartTime: Time,
    EndTime: Time
  ) {
    this.SchoolLessonTimesNumber = SchoolLessonTimesNumber;
    this.LessonNumber = LessonNumber;
    this.SchoolNumber = SchoolNumber;
    this.StartTime = StartTime;
    this.EndTime = EndTime;
  }
}

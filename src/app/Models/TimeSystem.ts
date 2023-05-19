export class TimeSystem {
  NumberTimeSystem: number;
  TeacherId: string;
  LessonNumber: number;
  ClassNumber: number;
  Subject: string;
  /**
   *
   */
  constructor(
    NumberTimeSystem: number,
    TeacherId: string,
    LessonNumber: number,
    ClassNumber: number,
    Subject: string
  ) {
    this.NumberTimeSystem = NumberTimeSystem;
    this.TeacherId = TeacherId;
    this.LessonNumber = LessonNumber;
    this.ClassNumber = ClassNumber;
    this.Subject = Subject;
  }
}

class Message {
  NumberTimeSystem: number;
  TeacherId: string;
  LessonNumber: number;
  ClassNumber: number;
  Subject: string;
  Date: Date;
  Status: boolean;

  /**
   *
   */
  constructor(
    NumberTimeSystem: number,
    TeacherId: string,
    LessonNumber: number,
    ClassNumber: number,
    Subject: string,
    Date: Date,
    Status: boolean
  ) {
    this.NumberTimeSystem = NumberTimeSystem;
    this.TeacherId = TeacherId;
    this.LessonNumber = LessonNumber;
    this.ClassNumber = ClassNumber;
    this.Subject = Subject;
    this.Date = Date;
    this.Status = Status;
  }
}

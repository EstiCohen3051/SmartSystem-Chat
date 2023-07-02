export enum Day { "ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי" }
export class TimeSystem {
  [x: string]: any;
  NumberTimeSystem: number;
  TeacherId: string;
  TeacherName: string;
  LessonNumber: number;
  ClassNumber: number;
  ClassName: string
  Day: Day;
  Subject: string;
  Status: boolean
  /**
   *
   */


  constructor(
    NumberTimeSystem: number,
    TeacherId: string,
    LessonNumber: number,
    ClassNumber: number,
    ClassName: string,
    Subject: string,
    Day: Day,
    TeacherName: string,
    Status: boolean

  ) {
    this.NumberTimeSystem = NumberTimeSystem;
    this.TeacherId = TeacherId;
    this.LessonNumber = LessonNumber;
    this.ClassNumber = ClassNumber;
    this.Day = Day;
    this.Subject = Subject;
    this.TeacherName = TeacherName;
    this.Status = Status
    this.ClassName = ClassName
  }
}

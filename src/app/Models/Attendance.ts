class Attendance {
  AttendanceNumber: number;
  TeacherId: string;
  status: string;
  Date: Date;
  LessonStart: string;
  LessonEnd: string;
  Approved: boolean;

  constructor(
    AttendanceNumber: number,
    TeacherId: string,
    status: string,
    Date: Date,
    LessonStart: string,
    LessonEnd: string,
    Approved: boolean
  ) {
    this.AttendanceNumber = AttendanceNumber;
    this.TeacherId = TeacherId;
    this.status = status;
    this.Date = Date;
    this.LessonStart = LessonStart;
    this.LessonEnd = LessonEnd;
    this.Approved = Approved;
  }
}

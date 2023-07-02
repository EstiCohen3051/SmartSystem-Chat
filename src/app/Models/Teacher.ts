export class Teacher {
  public Teacher_sId: string;
  public Teacher_sName: string;
  public Teacher_sLastName: string;
  public Teacher_sAddress: string;
  public Teacher_sEmail: string;
  public Teacher_sPassword: string;
  public Teacher_sPhone: string;
  public Status: boolean

  constructor(
    Teacher_sId: string,
    Teacher_sName: string,
    Teacher_sLastName: string,
    Teacher_sAddress: string,
    Teacher_sEmail: string,
    Teacher_sPassword: string,
    Teacher_sPhone: string,
    Status: boolean
  ) {
    this.Teacher_sId = Teacher_sId;
    this.Teacher_sName = Teacher_sName;
    this.Teacher_sLastName = Teacher_sLastName;
    this.Teacher_sAddress = Teacher_sAddress;
    this.Teacher_sEmail = Teacher_sEmail;
    this.Teacher_sPassword = Teacher_sPassword;
    this.Teacher_sPhone = Teacher_sPhone;
    this.Status = Status

  }
  Teacher(teacher: Teacher) {
    this.Teacher_sId = teacher.Teacher_sId;
    this.Teacher_sName = teacher.Teacher_sName;
    this.Teacher_sLastName = teacher.Teacher_sLastName;
    this.Teacher_sAddress = teacher.Teacher_sAddress;
    this.Teacher_sEmail = teacher.Teacher_sEmail;
    this.Teacher_sPassword = teacher.Teacher_sPassword;
    this.Teacher_sPhone = teacher.Teacher_sPhone;
  }
}

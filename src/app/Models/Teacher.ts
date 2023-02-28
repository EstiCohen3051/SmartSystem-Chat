class Teacher {
  Teacher_sId: string;
  Teacher_sName: string;
  Teacher_sLastName: string;
  Teacher_sAddress: string;
  Teacher_sEmail: string;
  Teacher_sPassword: string;
  Teacher_sPhone: string;

  constructor(
    Teacher_sId: string,
    Teacher_sName: string,
    Teacher_sLastName: string,
    Teacher_sAddress: string,
    Teacher_sEmail: string,
    Teacher_sPassword: string,
    Teacher_sPhone: string
  ) {
    this.Teacher_sId = Teacher_sId;
    this.Teacher_sName = Teacher_sName;
    this.Teacher_sLastName = Teacher_sLastName;
    this.Teacher_sAddress = Teacher_sAddress;
    this.Teacher_sEmail = Teacher_sEmail;
    this.Teacher_sPassword = Teacher_sPassword;
    this.Teacher_sPhone = Teacher_sPhone;
  }
}

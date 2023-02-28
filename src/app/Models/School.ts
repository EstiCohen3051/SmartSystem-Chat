class School {
  SchoolNumber: number;
  SchoolName: string;
  SchoolAddress: string;
  SchoolEMail: string;
  ManagerNumber: string;
  /**
   *
   */
  constructor(
    SchoolNumber: number,
    SchoolName: string,
    SchoolAddress: string,
    SchoolEMail: string,
    ManagerNumber: string
  ) {
    this.SchoolNumber = SchoolNumber;
    this.SchoolName = SchoolName;
    this.SchoolAddress = SchoolAddress;
    this.SchoolEMail = SchoolEMail;
    this.ManagerNumber = ManagerNumber;
  }
}

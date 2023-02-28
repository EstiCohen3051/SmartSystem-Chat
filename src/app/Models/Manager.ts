type NewType = string;

class Manager {
  ManagerId: string;
  ManagerName: string;
  ManagerLastName: string;
  ManagerAdress: string;
  ManagerPhone: string;
  ManagerPassword: string;
  ManagerEmail: string;

  /**
   *
   */
  constructor(
    ManagerId: string,
    ManagerName: string,
    ManagerLastName: string,
    ManagerAdress: string,
    ManagerPhone: string,
    ManagerPassword: string,
    ManagerEmail: string
  ) {
    this.ManagerId = ManagerId;
    this.ManagerName = ManagerName;
    this.ManagerLastName = ManagerLastName;
    this.ManagerAdress = ManagerAdress;
    this.ManagerPhone = ManagerPhone;
    this.ManagerPassword = ManagerPassword;
    this.ManagerEmail = ManagerEmail;
  }
}

export class RequestTeacher {
    constructor(
        public IdRequest: number,
        public TeacherId: string,
        public TeacherName: string,
        public Message: string,
        public Processed: boolean,
        public IdN:string[]=new Array<string>()) { }

}
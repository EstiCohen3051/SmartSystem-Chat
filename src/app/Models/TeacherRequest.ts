export class TeacherRequest {
    public IdRequest: number
    public TeacherId: string
    public Message: string
    public Processed: boolean
    constructor(IdRequest: number, TeacherId: string, Message: string, Processed: boolean) {
        this.IdRequest = IdRequest,
        this.TeacherId = TeacherId
        this.Message = Message,
            this.Processed = Processed       
    }
    TeacherRequest(teacher: TeacherRequest) {
        this.IdRequest = teacher.IdRequest,
            this.TeacherId = teacher.TeacherId,
            this.Message = teacher.Message,
            this.Processed = teacher.Processed
    }

}

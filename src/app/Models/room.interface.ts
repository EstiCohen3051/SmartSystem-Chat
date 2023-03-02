import { IMessage } from "./";

export interface IChatRoom{
    idRoom: string,
    roomName: string,
    messages: Array<IMessage>;
    createUserId:string
}
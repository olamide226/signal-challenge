export default class HttpException extends Error {
    protected status : number;
    protected data : object;
    constructor(status: number, message: string, data: object ={}) {
        super(message);
        this.status = status;
        this.message = message;
        this.data = data;
    }
}


import { Request, Response } from 'express';

interface ErrorInterface{
    status: number,
    message: string,
    data: object
}

export function errorMiddleware(error: ErrorInterface, req: Request, res: Response) {
    let { status = 500, message, data } = error;

    console.error(`[Error] ${error}`);

    // If status code is 500 - change the message to Intrnal server error
    message = status === 500 || !message ? 'Internal server error' : message;

    let errorObject = {
        type: 'error',
        status,
        message,
        ...(data) && data
    }

    return res.status(status).send(errorObject);
}
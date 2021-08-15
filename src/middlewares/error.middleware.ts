import { Request, Response, NextFunction } from 'express';
import HttpException from '../utils/HttpException.utils'


export function errorMiddleware(error: HttpException, req: Request, res: Response, next: NextFunction) {
    let { status = 500, message, data } = error;

    console.error(`[Error] ${error.message}`);

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
import express, { Application, Request, Response } from 'express';
import cors from "cors";
import HttpException from './utils/HttpException.utils';
import { errorMiddleware } from './middlewares/error.middleware';
import morgan from 'morgan';

// Routes
import defaultRoute from './routes/index.route';

export class App {

    private app: Application;
    port: number;

    constructor() {
        this.port = 3000;
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
        this.errorHandler();
    }

    settings() {
        this.app.set('port', this.port);
    }

    middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(cors());
    }

    routes() {
        this.app.use('/', defaultRoute);
        this.app.all('*', (req: Request, res: Response, next: Function) => {
            const err = new HttpException(404, 'Endpoint Not Found');
            next(err);
        });
    }

    errorHandler() {
        // Error middleware
        this.app.use(errorMiddleware);
    }

    listen() {
        this.app.listen(this.app.get('port'));
        console.log(`🚀 Server running on port ${this.app.get('port')}!`);
    }

}
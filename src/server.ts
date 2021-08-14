import express, { Application, Request, Response } from 'express';
import cors from "cors";
import HttpException from './utils/HttpException.utils';
import {errorMiddleware} from './middlewares/error.middleware';
// import morgan from 'morgan';

// Routes
import indexRoute from './routes/index.routes';

export class App {

    private app: Application;

    constructor(private port: number = 3000 ) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings() {
        this.app.set('port', this.port);
    }

    middlewares() {
        // this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(cors());
        // Error middleware
        this.app.use(errorMiddleware);
        // // 404 error
        this.app.all('*', (req : Request, res : Response, next) => {
            const err = new HttpException(404, 'Endpoint Not Found');
            next(err);
        });
    }

    routes() {
        this.app.use('/', indexRoute);
    }

    async listen() {
        await this.app.listen( this.app.get('port'));
        console.log( `🚀 Server running on port ${ this.app.get('port') }!` );
    }
    
}
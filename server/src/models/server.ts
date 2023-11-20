import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import db from '../db/connection';
import routesUsuario from '../routes/usuario';

class Server {
    private app: Application;
    private port: string;

    constructor() {
       // console.log(process.env.PORT);
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnection();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Aplicacion corriendo en puerto ${this.port}`);
        });
    }

    routes() {
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: 'API working'
            })
        }),
        this.app.use('/api/usuarios', routesUsuario);
    }

    midlewares(){
        //parseamos el body
        this.app.use(express.json());

        //cors
        this.app.use(cors());
    }

    async dbConnection(){
        try {
            await db.authenticate();
            console.log('Base de datos conectada');
        } catch (err) {
            console.log(err);
            console.log('Error al conectar la base de datos');
        }
    }

}

export default Server;
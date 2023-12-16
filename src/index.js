import express from "express";
import morgan from "morgan";
import path from "path";

//imports para __dirname en ES
import { fileURLToPath } from "url";
import { dirname } from "path";

import {router, router2} from "./routes/task.routes.js";


const app = express();



//settings
app.set('port', process.env.PORT || 3000); //Esto es para un deploy en el servidor, al puerto que se nos asigne. 

//middlewares
app.use(morgan('dev'));
app.use(express.json())

//routes
app.use('/api/task',router);
app.use('/v', router2)

//staticFiles. Para encontrar la carpeta de las paginas estaticas
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

//startingServer

app.listen(app.get('port'), ()=> {
    console.log(`Server on port ${app.get('port')}`);
})
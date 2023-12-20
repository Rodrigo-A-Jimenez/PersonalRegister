import express from 'express';

import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();

app.set('port', process.env.PORT || 3000); // se puede escribir >> const port = process.env.PORT || 3000
const port = app.get('port');

app.listen(port, ()=>{
    console.log(`En el puerto: ${port}`);
}); //iniciando el servidor

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

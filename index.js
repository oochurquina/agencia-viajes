import express from 'express';
import router from './routes/index.js';

const app = express();
const port = process.env.PORT || 3000
// request: lo que el cliente nos envia
// response: lo que se envia al cliente
// habilitar pug
app.set('view engine','pug')
app.use('/',router)
app.listen(port,()=>{
    console.log(`El servidor esta funcionando en el puerto: ${port}`);
})
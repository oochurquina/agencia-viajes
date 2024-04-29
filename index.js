import express from 'express';
import router from './routes/index.js';

const app = express();
const port = process.env.PORT || 3000
// habilitar pug
app.set('view engine','pug');
// obtener el año actual
app.use((req,res,next)=>{
    const y = new Date();
    res.locals.year= y.getFullYear()
    res.locals.nameSite = 'Agencia de viajes'
    next();
})
// definir carpeta Public
app.use(express.static('public'))
app.use('/',router)
app.listen(port,()=>{
    console.log(`El servidor esta funcionando en el puerto: ${port}`);
})
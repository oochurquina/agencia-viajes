import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();
db.authenticate()
    .then(() => console.log('Base de datos conectado'))
    .catch(error => console.log('Error', error))
const port = process.env.PORT || 3000
    // habilitar pug
app.set('view engine', 'pug');
// obtener el año actual
// nuestro propio middleware
app.use((req, res, next) => {
        const y = new Date();
        res.locals.year = y.getFullYear()
        res.locals.nameSite = 'Agencia de viajes'
        next();
    })
// agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended:true}));
    // definir carpeta Public
app.use(express.static('public'))
app.use('/', router)
app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto: ${port}`);
})
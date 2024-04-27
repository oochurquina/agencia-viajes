import express from 'express'

const router = express.Router();

<<<<<<< HEAD
router.get('/',(request,response,next)=>{
    response.send('hola mundo');
    next();
})

router.get('/nosotros',(request,response,next)=>{
    response.render('nosotros');
    next();
})

router.get('/contacto',(request,response,next)=>{
    response.send('Contacto') 
})

=======
router.get('/', (request, response, next) => {
    response.render('inicio');
    next();
})

router.get('/nosotros', (request, response, next) => {
    const viajes = "viaje a alemania"
    response.render('nosotros', {
        viajes
    });
    next();
})

>>>>>>> 2bf05bee1abe204037dcdfec4b1fd6231422be1f
export default router;
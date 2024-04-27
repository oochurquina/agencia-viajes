import express from 'express'

const router = express.Router();

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

export default router;
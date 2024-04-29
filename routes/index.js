import express from 'express'

const router = express.Router();

router.get('/', (request, response, next) => {
    response.render('inicio',{
        pagina:'Inicio'
    });
    next();
})

router.get('/nosotros', (request, response, next) => {
    const viajes = "viaje a alemania"
    response.render('nosotros', {
        pagina:'Nosotros'
    });
    next();
})

router.get('/viajes',(req,res,next)=>{
    res.render('viajes',{
        pagina:'Viajes'
    });
    next()
})
router.get('/testimoniales',(req,res,next)=>{
    res.render('testimoniales',{
        pagina:'Testimoniales'
    })
})

export default router;
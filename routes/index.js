import express from 'express'

const router = express.Router();

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

export default router;
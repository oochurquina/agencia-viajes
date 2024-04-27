import express from 'express'

const router = express.Router();

router.get('/', (request, response, next) => {
    response.send('INICIO');
    next();
})

router.get('/nosotros', (request, response, next) => {
    response.render('nosotros');
    next();
})

export default router;
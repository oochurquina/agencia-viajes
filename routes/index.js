import express from 'express'
import { pageDetalleViaje, pageInicio, pageNosotros, pageTestimoniales, pageViajes } from '../controller/index.js';

const router = express.Router();

router.get('/', pageInicio)
router.get('/nosotros', pageNosotros)
router.get('/viajes', pageViajes)
router.get('/viajes/:viaje', pageDetalleViaje)
router.get('/testimoniales', pageTestimoniales)

export default router;
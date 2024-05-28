import express from 'express'
import { pageDetalleViaje, pageInicio, pageNosotros, pageTestimoniales, pageViajes } from '../controller/index.js';
import { saveTestimoniales } from '../controller/testimonialController.js';

const router = express.Router();

router.get('/', pageInicio)
router.get('/nosotros', pageNosotros)
router.get('/viajes', pageViajes)
router.get('/viajes/:viaje', pageDetalleViaje)
router.get('/testimoniales', pageTestimoniales)
router.post('/testimoniales', saveTestimoniales)

export default router;
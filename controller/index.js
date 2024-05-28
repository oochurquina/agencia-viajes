import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/testimoniales.js";

const pageInicio = async(req, res) => {
    const promiseDb= [];
    promiseDb.push(Viaje.findAll({limit:3}));
    promiseDb.push(Testimonial.findAll({limit:3}));

    try {
        const result = await Promise.all(promiseDb);
        const [viajes,testimoniales] = result;
        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes,
            testimoniales
        });
    } catch (error) {
        console.log(error);
    }
}

const pageNosotros = (request, response, next) => {
    const viajes = "viaje a alemania"
    response.render('nosotros', {
        pagina: 'Nosotros'
    });
    next();
}

const pageViajes = async(req, res, next) => {
    const viajes = await Viaje.findAll();
    // console.log(viajes);
    res.render('viajes', {
        pagina: 'Viajes',
        viajes
    });
    next();
}

const pageTestimoniales = async(req, res, next) => {
    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        })
    } catch (error) {
        console.log(error);
    }
    next();
}

const pageDetalleViaje = async(req, res, next) => {
    const { viaje: slug } = req.params;
    try {
        const viaje = await Viaje.findOne({ where: { slug } })
        res.render('viaje', {
            pagina: 'Informacion Viaje',
            viaje
        })
        next();
    } catch (error) {
        console.log(error)
    }
}


export {
    pageInicio,
    pageNosotros,
    pageViajes,
    pageTestimoniales,
    pageDetalleViaje
}
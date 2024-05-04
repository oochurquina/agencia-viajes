import { Viaje } from "../models/Viaje.js";

const pageInicio = (req, res) => {
    res.render('inicio', {
        pagina: 'Inicio'
    });
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

const pageTestimoniales = (req, res, next) => {
    res.render('testimoniales', {
        pagina: 'Testimoniales'
    })
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
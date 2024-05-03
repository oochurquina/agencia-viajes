import { Viaje } from "../models/Viaje.js";

const pageInicio = (req,res) => {
    res.render('inicio',{
        pagina:'Inicio'
    });
}

const pageNosotros = (request, response, next) => {
    const viajes = "viaje a alemania"
    response.render('nosotros', {
        pagina:'Nosotros'
    });
    next();
}

const pageViajes = async(req,res,next)=>{
    const viajes = await Viaje.findAll();
    // console.log(viajes);
    res.render('viajes',{
        pagina:'Viajes',
        viajes
    });
    next();
}

const pageTestimoniales = (req,res,next)=>{
    res.render('testimoniales',{
        pagina:'Testimoniales'
    })
    next();
}

export {
    pageInicio,
    pageNosotros,
    pageViajes,
    pageTestimoniales
}
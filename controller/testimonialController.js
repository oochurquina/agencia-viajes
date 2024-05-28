import { Testimonial } from "../models/testimoniales.js";

const saveTestimoniales = async (req,res,next) => {
    const {nombre,correo, mensaje}=req.body;
    const errores=[];
    if (nombre.trim()===''){
        errores.push('Debe ingresar un nombre')
    }
    
    if (correo.trim()===''){
        errores.push('Debe ingresar un correo')
    }

    if (mensaje.trim()===''){
        errores.push('Debe ingresar un mensaje')
    }
    if (errores.length>0){
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales',{
            pagina: 'Testimoniales',
            nombre,correo,mensaje,
            errores,
            testimoniales
        })
    }
    else{
        // almacenar los datos
        try {
            await Testimonial.create({
                nombre,correo,mensaje
            })
            res.redirect('/testimoniales')
        } catch (error) {
            console.log(error);
        }

    }
    console.log(errores);
    next();
}
export {
    saveTestimoniales
}
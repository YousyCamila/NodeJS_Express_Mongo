const Curso = require('../models/curso_model');
const Joi = require('@hapi/joi');

//Funcion asincrona para crear cursos 
async function crearCurso(body) {
    let curso = new Curso({
        titulo: body.titulo,
        descripcion: body.descripcion,
        alumnos: body.alumnos,
        calificacion: body.calificacion
    });
    return await curso.save();
}


module.exports = {

    crearCurso
}



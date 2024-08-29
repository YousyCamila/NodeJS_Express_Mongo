const express = require('express');
const Curso = require('../models/curso_model');
const logic = require('../logic/cursos_logic');
const ruta = express.Router();

ruta.get('/', (req, res) => {
  res.json('Respuesta a petición GET de CURSOS funcionando correctamente...');
});

// Endpoint de tipo POST para el recurso CURSOS
ruta.post('/', (req, res) => {
  let resultado = logic.crearCurso(req.body);

  resultado.then(curso => {
    res.json({
      curso
    })
  }).catch(err => {
    res.status(400).json({
      err
    })
  })
});







module.exports = ruta;

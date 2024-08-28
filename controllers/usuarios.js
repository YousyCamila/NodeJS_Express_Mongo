const express = require('express');
const Usuario = require('../models/usuario_model');
const ruta = express.Router();
const Joi = require('@hapi/joi');
const logic = require('../logic/usuarios_logic');


ruta.get('/', (req, res) => {
    res.json('Respuesta a petición GET de USUARIOS funcionando correctamente...');
  });

    // Endpoint de tipo POST para el recurso USUARIOS
    ruta.post('/', (req, res) => {
        let body = req.body;
    
        const {error, value} = logic.schema.validate({nombre: body.nombre, email: body.email});
        if(!error){
            let resultado = logic.crearUsuario(body);
    
            resultado.then( user => {
                res.json({
                    valor: user
                });
            }).catch( err => {
                res.status(400).json({
                    err
                });
            });
        }else{
            res.status(400).json({
                error
            });
        }    
    });

    //Endpoint de tipo PUT para actualizar los datos del usuario
ruta.put('/:email', (req, res) => {
    const {error, value} = logic.schema.validate({nombre: req.body.nombre});
    if(!error){
        let resultado = logic.actualizarUsuario(req.params.email, req.body);
        resultado.then(valor => {
            res.json({
                valor
            })
        }).catch(err => {
            res.status(400).json({
                err
            })
        });
    }else{
        res.status(400).json({
            error
        })
    }    
});

//Endpoint de tipo DELETE para el recurso USUARIOS
ruta.delete('/:email', (req, res) => {
    let resultado = logic.desactivarUsuario(req.params.email);
    resultado.then(valor => {
        res.json({
            usuario: valor
        })
    }).catch(err => {
        res.status(400).json({
            err
        })
    });
});


    
 


  





module.exports = ruta;

const {response}=require('express');

const usuariosGET = (req, res=response) =>{

    const {query,nombre='Not name',apikey, page=1, limit} = req.query;

    res.json({
        msg:'get API - controller',
        query,
        apikey,
        page,
        limit
    });
  }


const usuariosPOST = (req, res=response) =>{
    const {nombre, edad} = req.body;

    res.status(201).json({
        msg:'post API -controller',
        nombre, 
        edad
    });
  }


const usuariosPUT = (req, res=response) =>{
    
const id = req.params.id;

    res.json({
        msg:'put API - controller',
        id
    });
  }

const usuariosPATCH = (req, res=response) =>{
    res.json({
        msg:'patch API - controller'
    });
  }

const usuariosDELETE = (req, res=response) =>{
    res.json({
        msg:'delete API - controller'
    });
  }

  module.exports = {
    usuariosGET,
    usuariosPOST,
    usuariosPUT,
    usuariosPATCH,
    usuariosDELETE
  }
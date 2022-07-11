const express = require('express')
const cors = require('cors')

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        //Para saber que rutas tengo en mi app
        this.usuariosRoutePath = '/api/usuarios';

        //Middlewares
        this.middlewares();
        //rutas de mi app
        this.routes();
    }

    middlewares(){
        //CORS > Para restringir acceso de sitios web
        this.app.use(cors());
        //Lectura y parseo del body
        this.app.use(express.json());
        //Directorio publico
        this.app.use(express.static('public'))
    }

    routes(){
        
        //Configurar rutas de la app
        this.app.use(this.usuariosRoutePath, require('../routes/usuarios'));
        //Aca se pueden crear mas rutas
    }
    
    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor corriendo en el puerto',this.port);
        });
        
    }

}

module.exports = Server;

//--Documentacion
//Middlewares > Son funciones que le agregan otra funcionalidad al webServer
//El .use() se utiliza para indicar que es un middleware

//A los .json se le debe mandar objetos

//El postman funciona para hacer una simulacion de una
//aplicacion que se haya creado

//--Ejemplos de uso POST / PUT
//PUT> Actualizar datos
//POST> Crear nuevos recursos(crear usuario, etc)
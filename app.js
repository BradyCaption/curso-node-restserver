require('dotenv').config();

const Server = require('./models/server');

const server=new Server();

server.listen();



//--Documentacion
//Recordar que 
//Dotenv : es para crear variables de entorno
//Express: es el framework
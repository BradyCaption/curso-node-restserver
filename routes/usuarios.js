const {Router} = require('express');
const { usuariosGET, usuariosPOST, usuariosPUT, usuariosPATCH, usuariosDELETE } = require('../controllers/usuarios');

const router = Router();

//Aca se hacen todas las rutas del programa POST,PUT,GET,ETC
// para un usuario/ETC

  router.get('/', usuariosGET);

  router.post('/', usuariosPOST);

  router.put('/:id', usuariosPUT);

  router.patch('/', usuariosPATCH);

  router.delete('/', usuariosDELETE);



module.exports = router;
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('./config/colors');

console.clear();

crearArchivo( argv.b, argv.l, argv.hs )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'.trap.info))
    .catch( err => console.log(err) );
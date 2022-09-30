const colors = require('./colors');

const argv = require('yargs')
    .options('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .check( (argv, options) => {
        if( isNaN( argv.b ) ){
            throw ('La base tiene que ser un número'.warn);
        }
        return true;
    })
    .options('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muesstra la tabla de multiplicar en consola'
    })
    .options('hs', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Muestra el limite de iteraciones'
    })
    .argv;

    module.exports = argv;
const fs = require('fs');

const crearArchivo = async( base = 5, listar=false, hasta = 10 ) => {

	try {

		let salida = '';
		let consola = '';

		for ( let i = 1; i <= hasta; i++ ) { 
			salida  += `${ base } x ${ i } = ${ base * i }\n`; 
			consola += `${'|'.yellow}	${ base } ${ 'x'.verbose } ${ i } ${ '='.prompt} ${ base * i }	     ${'|'.yellow}\n`;
		}

		if (listar == true){
			console.log("==============================".yellow);
			console.log(`|	TABLA DEL ${base}          |`.trap.rainbow);
			console.log('=============================='.yellow);
			console.log((consola));
			console.log('=============================='.yellow);
		}
		if(hasta)
		fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);

		return`tabla-${base}.txt`;

	} catch (error) {
		throw (error);
	}
	
}

module.exports = {
	crearArchivo
}
#Trmcol

###Consulta el webservice de la Superintendencia Fianciera de Colombia para Obtener La tasa de cambio representativa del mercado (TRM) en una fecha especifica.
--

## Instalacion

```sh
npm install trmcol --save
```

## Ejemplo de Uso

	var trmcol = require('trmcol').trm;

	trmcol.query('2016-03-19', function(err, trm) {
	  if (err) {
	    return console.error(err);
	  }
	  console.log(trm);
	});


Se debe enviar como parametro una fecha con formato YY-MM-DD;  La respuesta retornada es un objeto Json con la siguiente estructura: 

	{ id: '304751', unit: 'COP', validityFrom: Sat Mar 19 2016 00:00:00 GMT-0500 (COT), validityTo: Tue Mar 22 2016 00:00:00 GMT-0500 (COT), value: '3065.79', success: true }

Por alguna razon desconocida, el Webservice de la Superintendencia Financiera no retorna datos en fechas anteriores al año 2013.

Para mas informacion pueden remitirse a la documentacion Oficial del servicio web:
	https://www.superfinanciera.gov.co/jsp/loader.jsf?lServicio=Publicaciones&lTipo=publicaciones&lFuncion=loadContenidoPublicacion&id=60819
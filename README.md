# Trmcol

#### Consulta el webservice de la Superintendencia Fianciera de Colombia para obtener la tasa de cambio representativa del mercado (TRM) en una fecha específica

## Instalación

```sh
npm install trmcol --save // Para usar dentro de un proyecto JS

(sudo) npm install trmcol -g // Para usar en consola
```

## Ejemplo de Uso

```js
var trmcol = require('trmcol')

trmcol.query(function (err, trm) { // Valor actual
  if (err) {
    return console.error(err)
  }
  console.log(trm) // JSON completo
  console.log(trm.value) // Valor (texto)
})

trmcol.query('2016-03-19', function (err, trm) { // Valor en fecha pasada por parametro: Marzo 19, 2016
  if (err) {
    return console.error(err)
  }
  console.log(trm) // JSON completo
  console.log(trm.value) // Valor (texto)
})
```

El parametro de fecha es opcional y debe ser del formato YYYY-MM-DD 

La respuesta retornada es un objeto JSON con la siguiente estructura: 

`{ id: '304751', unit: 'COP', validityFrom: Sat Mar 19 2016 00:00:00 GMT-0500 (COT), validityTo: Tue Mar 22 2016 00:00:00 GMT-0500 (COT), value: '3065.79', success: true }`

### Nota

Por alguna razon desconocida, el Webservice de la Superintendencia Financiera no retorna datos en fechas anteriores al año 2013.

Para mas informacion pueden remitirse a la documentación Oficial del servicio web:

https://www.superfinanciera.gov.co/jsp/loader.jsf?lServicio=Publicaciones&lTipo=publicaciones&lFuncion=loadContenidoPublicacion&id=60819

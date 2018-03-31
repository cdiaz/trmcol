# Trmcol

#### Consulta el webservice de la Superintendencia Fianciera de Colombia para obtener la tasa de cambio representativa del mercado (TRM) en una fecha específica

[![NPM](https://nodei.co/npm/trmcol.png?downloads=true)](https://nodei.co/npm/trmcol/)

## Instalación

```sh
npm install --save trmcol
```

## Ejemplo de Uso

```js
const trmcol = require('trmcol');

trmcol.query('2018-03-30')
  .then(trm => console.log(trm))
  .catch(err => console.log(err))
```

- El método `trmcol.query()` retorna una promesa.
- El parámetro `fecha` es opcional y debe estár en formato `YYYY-MM-DD`.
- Si el parámetro `fecha` no se especifica, se usará por defecto la fecha actual.
- El resultado devuelto es un objeto JSON con la siguiente estructura:


```
{
  id: '660701',
  unit: 'COP',
  validityFrom: 2018-03-29T05:00:00.000Z,
  validityTo: 2018-04-02T05:00:00.000Z,
  value: '2780.47',
  success: true
}
```

### Uso en consola

Para obtener el valor de la TRM desde la línea de comandos, se debe instalar el paquete de manera global:

```sh
npm install -g trmcol
```
Ahora puede utilizar el comando:
```sh
trmcol
```
Esto retornará un resultado similar a:
```sh
La TRM del día ('Fri Mar 30 2018') es $2780.47
```
### Nota

>El servicio No retorna datos para las fechas anteriores al año 2013.

Para mas informacion pueden consultar la [documentación Oficial](https://www.superfinanciera.gov.co/jsp/loader.jsf?lServicio=Publicaciones&lTipo=publicaciones&lFuncion=loadContenidoPublicacion&id=60819) del servicio web

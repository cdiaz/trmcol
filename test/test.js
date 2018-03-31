var test = require('tape')
var trmcol = require('../src')

test('Valor actual', function (t) {
  t.plan(1)

  trmcol.query()
    .then(trm1 => {
      var d = new Date()
      d.setTime(d.getTime() - 300 * 60000) // Forzar hora colombiana
      trmcol.query(d.toISOString().slice(0, 10))
        .then(trm2 => {
          t.equal(trm1.value, trm2.value)
        })
        .catch(err => {
          t.error(err)
        })
    })
})

test('Fechas Válidas', (t) => {
  t.plan(2)

  trmcol.query('2015-01-01')
    .then(trm => t.equal(trm.value, '2392.46'))
    .catch(err => t.error(err))

  trmcol.query('2016-01-01')
    .then(trm => t.equal(trm.value, '3149.47'))
    .catch(err => t.error(err))
})

test('Fechas inválidas', (t) => {
  t.plan(2)

  trmcol.query('15-01-01')
    .then()
    .catch(err => t.ok(err, 'Existe error'))

  trmcol.query('2016-13-01')
    .then()
    .catch(err => t.ok(err, 'Existe error'))
})

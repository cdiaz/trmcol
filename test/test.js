var test = require('tape')
var trmcol = require('./../index')

test('Valor actual', function (t) {
  t.plan(3)

  trmcol.query(function (err, trm1) {
    t.error(err)
    var d = new Date()
    d.setTime(d.getTime() - 300 * 60000) // Forzar hora colombiana
    trmcol.query(d.toISOString().slice(0, 10), function (err, trm2) {
      t.error(err)
      t.equal(trm1.value, trm2.value)
    })
  })
})

test('Fechas Válidas', function (t) {
  t.plan(4)

  trmcol.query('2015-01-01', function (err, trm) {
    t.error(err)
    t.equal(trm.value, '2392.46')
  })
  trmcol.query('2016-01-01', function (err, trm) {
    t.error(err)
    t.equal(trm.value, '3149.47')
  })
})

test('Fechas inválidas', function (t) {
  t.plan(2)

  trmcol.query('15-01-01', function (err, trm) {
    t.ok(err, 'Existe error')
  })
  trmcol.query('2016-13-01', function (err, trm) {
    t.ok(err, 'Existe error')
  })
})

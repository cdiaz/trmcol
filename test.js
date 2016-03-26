var test = require('tape')
var trmcol = require('./')

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

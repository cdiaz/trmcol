#!/usr/bin/env node
var trmcol = require('../')

var d = new Date()
d.setTime(d.getTime() - 300 * 60000) // Forzar hora colombiana

trmcol.query(function (err, trm) {
  if (err) {
    console.error(err)
    process.exit(0)
  }
  console.log('La TRM del día (' + d.toDateString() + ') es $' + trm.value)
})

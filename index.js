var soap = require('soap')

var WSDL_URL = 'https://www.superfinanciera.gov.co/SuperfinancieraWebServiceTRM/TCRMServicesWebService/TCRMServicesWebService?WSDL'

function Trmcol () {

}

Trmcol.prototype.query = function (date, callback) {
  if (typeof date === 'function') { // Si no se especifica una fecha, usar la actual
    var d = new Date()
    d.setTime(d.getTime() - 300 * 60000) // Forzar hora colombiana
    return this.query(d.toISOString().slice(0, 10), date)
  }

  soap.createClient(WSDL_URL, {
    endpoint: WSDL_URL,
    ignoredNamespaces: {
      namespaces: [],
      override: true
    }
  }, function (err, client) {
    if (err) {
      return callback(err)
    }

    client.queryTCRM({tcrmQueryAssociatedDate: date}, function (err, result) {
      if (!err) {
        return callback(null, result.return)
      } else {
        return callback(err.root.Envelope.Body.Fault.faultstring)
      }
    })
  })
}

module.exports = new Trmcol()

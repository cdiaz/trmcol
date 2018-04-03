'use strict'
const soap = require('soap')

class Trmcol {
  constructor () {
    this.WSDL_URL = 'https://www.superfinanciera.gov.co/SuperfinancieraWebServiceTRM/TCRMServicesWebService/TCRMServicesWebService?WSDL'
    this.options = {
      endpoint: this.WSDL_URL
    }
  }

  query (date) {
    return new Promise((resolve, reject) => {
      soap.createClient(this.WSDL_URL, this.options, (err, client) => {
        if (err) {
          reject(err)
        } else {
          client.queryTCRM({tcrmQueryAssociatedDate: date}, (err, trm) => {
            if (!err) {
              resolve(trm.return)
            } else {
              reject(err.root.Envelope.Body.Fault.faultstring)
            }
          })
        }
      })
    })
  }
}

module.exports = new Trmcol()
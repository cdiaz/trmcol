var soap = require('soap');

(function() {

    function Trm() {
        this.trm = new trm();
    }

    function trm() {
        this.WSDL_URL = "https://www.superfinanciera.gov.co/SuperfinancieraWebServiceTRM/TCRMServicesWebService/TCRMServicesWebService?WSDL";
    }

    trm.prototype.query = function(date, callback) {

        soap.createClient(this.WSDL_URL,{
            endpoint: this.WSDL_URL,
            ignoredNamespaces: {
              namespaces: [],
              override: true
            }
        }, function (err, client){
        if(err){
          return callback(err);
        }

        client.queryTCRM({tcrmQueryAssociatedDate: date}, function(err, result){
          if(!err){
            return callback(null, result.return);
          }else{
            return callback(err.root.Envelope.Body.Fault.faultstring);
          }
        });
        });
    };

    module.exports = new Trm();
}).call(this);
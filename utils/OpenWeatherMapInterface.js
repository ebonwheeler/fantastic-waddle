var request = require("request");
var Q = require("q");
var log4js = require("log4js");
var logger = log4js.getLogger("OpenWeatherMapInterface");

function OpenWeatherMapInterface(options) {
  this.apiKey = options.api_key;
}

OpenWeatherMapInterface.prototype.queryPostCode = function(postCode, countryCode) {
  var url = "https://api.openweathermap.org/data/2.5/weather?zip=" + postCode + "," + countryCode + "&APPID=" + this.apiKey;
  var deferred = Q.defer();

  logger.debug("Making request to: ", url);
  request.get(url, function(err, res, body) {
    if(err) {
      return deferred.reject(err);
    }
    console.log(body);
    deferred.resolve(JSON.parse(body));
  });
  return deferred.promise;
};

module.exports = OpenWeatherMapInterface;

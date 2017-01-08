var config = require("config");
var OpenWeatherMapAdapter = require("./service/OpenWeatherMapAdapter.js");

var mapAdapter = new OpenWeatherMapAdapter(config);

mapAdapter.start()
  .then(function() {

  });

var log4js = require("log4js");
var logger = log4js.getLogger("TaskRest");

function initialise(app, taskService) {
  logger.info("Initialising the TaskRest");
}

module.exports = {
  intialise: initialise,
};

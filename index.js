var parserService = require("./services/parser.service");
var config = require("./config");


module.exports.handler = function(event, context) {
	console.log("\n"+event.gatewayContext.httpMethod+"|"+event.gatewayContext.resourcePath);
	global.injector = {
		event: event,
		context: context,
		params: parserService.parseParams(event),
		config: config,
		basePath: __dirname + "/",
		errors: require("./factories/error.factory"),
		validatorService: require("./services/validator.service"),
	};

    //Determin run type
    	if(!event.gatewayContext)
    		return context.succeed("Manual run");

    	console.log("API Gateway run");
		return require("./routes/router")();
};

module.exports = function(){
    try{
        switch(injector.event.gatewayContext.resourcePath){
            case "/echo":
                switch(injector.event.contgatewayContextext.httpMethod){
                    case "POST": return require("./echo/post")();
                }
                break;

            case "/status": return require("./status")();
        }
    }
    catch(error){
        console.error("Exception thrown - "+error);
        if(!error.code)
            error.code=500;
        return injector.context.done(error.code,error);
    }
};

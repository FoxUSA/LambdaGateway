var tv4 = require("tv4");
module.exports ={
    validate: function(body, schema){
        if(tv4.validate(body, schema))
            return;

        var error = injector.errors.invalidRequest();
            error.error=tv4.error;
        throw error;
    }
};

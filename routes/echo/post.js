module.exports = function(){
    injector.authService.requireUser();
    var dirtyEcho = injector.event.params.body;
    injector.validatorService.validate(dirtyEcho, require(injector.basePath+"schemas/echo.json"));

    return injector.context.succeed(injector.event.params);
};

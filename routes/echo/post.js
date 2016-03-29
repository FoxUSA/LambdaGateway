module.exports = function(){
    injector.authService.requireUser();
    var dirtyEcho = injector.event.params.body;
    injector.validatorService.validate(dirtyEcho, require(injector.basePath+"schema/echo.json"));

    return injector.context.succeed(injector.event.params);
};

angular.module('todoListApp') // no dependency arg means look for existing app
.directive('helloWorld', function() {
    return {
        template: 'This is the hello world directive',
        restrict: 'E' // use as an element only, not element attribute
    };
});
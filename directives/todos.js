angular.module('todoListApp')
.directive('todos', function () {
  return {
    templateUrl: 'templates/todos.html',
    controller: 'mainCtrl',
    replace: true // Don't show the <todo> tag in the HTML
  };
});

'use strict';

// Create controller and attach to app
angular.module('todoListApp')
.controller('mainCtrl', function ($scope, dataService) {
    dataService.getTodos(function(response) {
        console.log(response.data);
        $scope.todos = response.data;
    });

    $scope.deleteTodo = function(todo, index) {
        dataService.deleteTodo(todo);
        $scope.todos.splice(index, 1);
    };

    $scope.saveTodos = function() {
        var filteredTodos = $scope.todos.filter(function(todo) {
          if (todo.edited) {
            return todo;
          }
        });
        dataService.saveTodos(filteredTodos);
    };

    $scope.addTodo = function () {
        var todo = {name: 'New item'};
        $scope.todos.unshift(todo);
    };
})

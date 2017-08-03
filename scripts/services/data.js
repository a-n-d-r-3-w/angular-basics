'use strict';

// Create service and attach to app
angular.module('todoListApp')
.service('dataService', function($http) {
    
    this.getTodos = function(callback) {
        $http.get('mock/todos.json').then(callback);
    };
    
    this.deleteTodo = function(todo, callback) {
        console.log('deleting ' + todo.name);
        // TODO: delete data from database
    };
    
    this.saveTodo = function(todo, callback) {
        console.log('saving ' + todo.name);
        // TODO: save data to database
    };
    
});
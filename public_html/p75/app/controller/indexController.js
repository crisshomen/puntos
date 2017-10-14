angular.module('P75').controller('indexController',
        [
           '$scope',
           'DataBaseService',
           function ($scope, DataBase) {
              $scope.showInfo = false;
              $scope.data = {};
              $scope.mensaje = '';
              $scope.procesar = function () {
                 $scope.mensaje = 'you are a person of ' + 
                         $scope.data.edad + ' years of age, whose biological ' + 
                         ($scope.data.genero === 'h' ? 'man' : 'woman') + ' and your marital status is ' + 
                         $scope.data.estado;
                 $scope.showInfo = true;
              };
              $scope.restablecer = function () {
                 $scope.data = {};
                 $scope.showInfo = false;
                 $scope.mensaje = '';
              };
           }
        ]);
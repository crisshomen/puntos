angular.module('P75').controller('indexController',
        [
           '$scope',
           'DataBaseService',
           function ($scope, DataBase) {
              $scope.showInfo = false;
              $scope.data = {};
              $scope.mensaje = '';
              $scope.procesar = function () {
                 $scope.mensaje = 'Usted es una persona de ' + 
                         $scope.data.edad + ' años de edad, cuyo género biológico es ' + 
                         ($scope.data.genero === 'h' ? 'hombre' : 'mujer') + ' y su estado civil es ' + 
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
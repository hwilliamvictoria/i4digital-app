/**
 * Controlador Usuarios
 *
 *
 * @author William Victoria <william.victoria092@gmail.com>
 * @version 1.0.0
 *
 */

app.controller('UsersController', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/users'
    }).then(function (response) {
      $scope.users = response.data;
    });
  }
]);

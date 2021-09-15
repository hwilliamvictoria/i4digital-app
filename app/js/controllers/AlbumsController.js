/**
 * Controlador Álbumes
 *
 *
 * @author William Victoria <william.victoria092@gmail.com>
 * @version 1.0.0
 *
 */

app.controller('AlbumsController', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $http({
      method: 'GET',
      url: './data/albumes.json'
    }).then(function (response) {
      $scope.albumes = response.data;
    });
  }
]);

/**
 * Controlador Publicaciones
 *
 *
 * @author William Victoria <william.victoria092@gmail.com>
 * @version 1.0.0
 *
 */

app.controller('PublicationsController', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $scope.removePublication = function (publication) {
      const removePublication = $scope.publications.indexOf(publication);
      $scope.publications.splice(removePublication, 1);
    };

    $scope.addPublication = function () {
      $scope.publications.push({
        title: $scope.newPublication.title,
        user: $scope.newPublication.user,
        description: $scope.newPublication.description,
        thumb: 'img/users/user_006.png'
      });

      $scope.newPublication.title = '';
      $scope.newPublication.user = '';
      $scope.newPublication.description = '';
    };

    $http({
      method: 'GET',
      url: './data/publications.json'
    }).then(function (response) {
      $scope.publications = response.data;
    });
  }
]);

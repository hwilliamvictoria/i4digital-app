/**
 * Rutas de la aplicación
 *
 *
 * @author William Victoria <william.victoria092@gmail.com>
 * @version 1.0.0
 *
 */

let app = angular.module('i4DigitalApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })
    .when('/users', {
      templateUrl: 'views/users.html',
      controller: 'UsersController'
    })
    .when('/albums', {
      templateUrl: 'views/albums.html',
      controller: 'AlbumsController'
    })
    .when('/publications', {
      templateUrl: 'views/publications.html',
      controller: 'PublicationsController'
    })
    .otherwise({
      redirectTo: '/'
    });
});

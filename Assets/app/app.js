/* App Module */

var app = angular.module('app', [
    'ngRoute',
    'ngCookies',
    'main',
    'home',
    'signIn',
    'register',
    'csstemplates',
    'contact',
    'license',
    'ads'
]);

app.config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {

    //================================================
    // Add an interceptor for AJAX errors
    //================================================
    $httpProvider.responseInterceptors.push(['$q','$location', function ($q, $location) {
        return function (promise) {
            return promise.then(
              // Success: just return the response
              function (response) {
                  return response;
              },
              // Error: check the error status to get only the 401
              function (response) {
                  if (response.status === 401)
                      $location.url('/signin');
                  return $q.reject(response);
              }
            );
        }
    }]);
    
    //================================================
    // Routes
    //================================================
    $routeProvider.when('/', {
        templateUrl: 'App/Home',
        controller: 'homeCtrl'
    });
    $routeProvider.when('/register', {
        templateUrl: 'App/Register',
        controller: 'registerCtrl'
    });
    $routeProvider.when('/signin', {
        templateUrl: 'App/SignIn',
        controller: 'signInCtrl'
    });
    $routeProvider.when('/csstemplates', {
        templateUrl: 'App/CssTemplates',
        controller: 'csstemplatesCtrl'
    });
    $routeProvider.when('/ads', {
        templateUrl: 'App/Ads',
        controller: 'adsCtrl'
    });
    $routeProvider.when('/contact', {
        templateUrl: 'App/Contact',
        controller: 'contactCtrl'
    });
    $routeProvider.when('/about', {
        templateUrl: 'App/About',
        controller: 'aboutCtrl'
    });
    $routeProvider.when('/license', {
        templateUrl: 'App/License',
        controller: 'licenseCtrl'
    });
    $routeProvider.otherwise({
        redirectTo: '/'
    });    
}]);

app.run(['$http', '$cookies', '$cookieStore', function ($http, $cookies, $cookieStore) {
    //If a token exists in the cookie, load it after the app is loaded, so that the application can maintain the authenticated state.
    $http.defaults.headers.common.Authorization = 'Bearer ' + $cookieStore.get('_Token');
}]);



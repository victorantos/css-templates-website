angular.module('home', [])
    .controller('homeCtrl',['$scope','$http', function ($scope, $http) {
        $scope.getPrimeTemplates = function () {
            $http.get('/api/Csstemplates/get')
                .success(function (data, status, headers, config) {
                    $scope.primeTemplates = data;
                });
        }

        $scope.getPrimeTemplates();
        $scope.defaultTemplates = ['prime'];

    }]);
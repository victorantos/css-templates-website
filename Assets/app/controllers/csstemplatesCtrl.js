angular.module('csstemplates', [])
    .controller('csstemplatesCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.alert = function () {
            alert("WOW");
        }
    }]);
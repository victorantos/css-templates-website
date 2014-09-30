angular.module('cssTemplates', [])
    .controller('cssTemplatesCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.alert = function () {
            alert("WOW");
        }
    }]);
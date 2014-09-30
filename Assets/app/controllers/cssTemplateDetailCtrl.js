angular.module('cssTemplateDetail', [])
    .controller('cssTemplateDetailCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {
        $scope.cssTemplateName = $routeParams.cssTemplateId;
    }]);
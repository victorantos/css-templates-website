angular.module('cssTemplateDetail', [])
    .controller('cssTemplateDetailCtrl', ['$scope', '$routeParams', '$http', 'csstemplates', function ($scope, $routeParams, $http, csstemplates) {
        $scope.cssTemplateName = $routeParams.cssTemplateId;
        csstemplates.add($scope.cssTemplateName);

    }]);
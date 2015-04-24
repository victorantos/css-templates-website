angular.module('cssTemplateDetail', [])
    .controller('cssTemplateDetailCtrl', ['$rootScope', '$scope', '$routeParams', '$http', 'csstemplates', 'filterFilter', '$sce', function ($rootScope, $scope, $routeParams, $http, csstemplates, filterFilter, $sce) {
        $scope.cssTemplateName = $routeParams.cssTemplateId;
        
        $scope.cssTemplate = filterFilter(csstemplates.getLoadedTemplates(), $scope.cssTemplateName);

        if ($scope.cssTemplate == null) {
            csstemplates.byTemplateName($scope.cssTemplateName).then(function (resp) {

                if (resp.data.list != null && resp.data.list.length) {
                    $scope.cssTemplate = resp.data.list[0];
                    console.dir($scope.cssTemplate);
                    $scope.templateUrl = $scope.cssTemplate.previewUrl;
                }
            });
        }
        else
            $scope.templateUrl = $scope.cssTemplate.previewUrl;
    }]);
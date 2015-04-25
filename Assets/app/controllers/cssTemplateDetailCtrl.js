angular.module('cssTemplateDetail', [])
    .controller('cssTemplateDetailCtrl', ['$rootScope', '$scope', '$routeParams', '$http', 'csstemplates', 'filterFilter', '$sce', function ($rootScope, $scope, $routeParams, $http, csstemplates, filterFilter, $sce) {
        $scope.cssTemplateName = $routeParams.cssTemplateId;
        
        $scope.cssTemplate = filterFilter(csstemplates.getLoadedTemplates(), $scope.cssTemplateName);
        $scope.templateUrl = null;
        if ($scope.cssTemplate == null) {
            csstemplates.byTemplateName($scope.cssTemplateName).then(function (resp) {

                if (resp.data.list != null && resp.data.list.length) {
                    $scope.cssTemplate = resp.data.list[0];
                    console.dir($scope.cssTemplate);
                    $scope.templateUrl = $sce.trustAsResourceUrl(resp.data.list[0].previewUrl);
                }
            });
        }
        else
            $scope.templateUrl = $sce.trustAsResourceUrl($scope.cssTemplate[0].previewUrl);
    }]);
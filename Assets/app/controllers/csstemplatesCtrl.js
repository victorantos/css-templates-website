angular.module('cssTemplates', ['csstemplates.service'])
    .controller('cssTemplatesCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.alert = function () {
            alert("WOW");
        }
    }])
    .directive('recentlyviewed', [  'csstemplates', function ( csstemplates) {
            return {
                templateUrl: 'App/_RecentlyViewed',
                link: function(scope, element, attrs)  {
                    scope.items = csstemplates.recentlyViewed();
                }
            };
        }]);
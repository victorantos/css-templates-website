angular.module('cssTemplates', [])
    .controller('cssTemplatesCtrl', ['$scope', 'csstemplates', function ($scope, csstemplates) {

        $scope.itemsPerPage = 5;
        $scope.currentPage = 0;
        $scope.total = 0;
        $scope.getPrimeTemplates = function () {
            csstemplates.browseTemplates(1).then(function (resp) {
                $scope.templates = resp.data.list; 
                $scope.itemsPerPage = resp.data.pagesize;
                $scope.total = resp.data.total;
            });
        }

        $scope.pageCount = function () {
            return Math.floor($scope.total / $scope.itemsPerPage) + ($scope.total % $scope.itemsPerPage >0 ? 1: 0);
        };

        $scope.pages = function () {
           var totalitems = [];
 
            for (var i = 0; i < $scope.pageCount() ; i++) {
                totalitems.push(i+1);
            }

            return totalitems;
        }

        $scope.getPrimeTemplates();
        $scope.defaultTemplates = ['explore'];
    }])
    .directive('recentlyviewed', [  'csstemplates', function ( csstemplates) {
            return {
                templateUrl: 'App/_RecentlyViewed',
                link: function(scope, element, attrs)  {
                    scope.items = csstemplates.recentlyViewed();
                }
            };
        }]);
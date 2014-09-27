angular.module('main', ['ngCookies'])
    .controller('mainCtrl',['$scope','$http','$cookies','$cookieStore','$location', function ($scope, $http, $cookies, $cookieStore, $location) {
        $scope.logout = function()
        {
            $http.defaults.headers.common.Authorization = null;
            $scope.password = null;
            $cookieStore.remove('_Token');
            if ($location.path() === '/signin')
                $scope.getUserName();
            else
                window.location = '#/signin';
        }

        $scope.getUserName = function () {
            $http.get('/api/WS_Account/GetCurrentUserName')
            .success(function (data, status, headers, config) {
                if (data != "null") {
                    $scope.loggedIn = true;                    
                    $scope.username = data.replace(/["']{1}/gi,"");//Remove any quotes from the username before pushing it out.
                }
                else
                    $scope.loggedIn = false;
            });
        }

        $scope.$on('$locationChangeSuccess', function (event) {
            //possiblity of updating token on this request.  This could be the keepalive function.
            $scope.getUserName();
        });

        //On Load, get the username
        $scope.getUserName();
    }]);
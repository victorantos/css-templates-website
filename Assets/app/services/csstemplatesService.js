angular.module('csstemplates.service', [
])
// A RESTful factory for retrieving jobs 
.factory('csstemplates', ['$http', function ($http, utils) {
    
    var recentlyViewed = [];
    var maxRecentlyViewed = 5;
    var loadedTemplates = null;
    var factory = {};
    
    factory.browseTemplates = function (page) {
        var results = $http.get('/api/Csstemplates/get?p=' + page)
           .then(function (resp) {
               loadedTemplates = resp.data.list;
               return resp;
           });
        return results;
    };
    factory.byTemplateName = function (template) {
        var results = $http.get('/api/Csstemplates/GetByTemplateName?name=' + template)
           .then(function (resp) {
               loadedTemplates = resp.data.list;
               return resp;
           });
        return results;
    };

    factory.getLoadedTemplates = function () {
        return loadedTemplates;
    };

    factory.recentlyViewed = function () {
        return recentlyViewed;
    };

    factory.add = function (csstemplate) {
        var position = $.inArray(csstemplate, recentlyViewed);
        if (~position)
            recentlyViewed.splice(position, 1);
        else if (recentlyViewed.length >= maxRecentlyViewed)
            recentlyViewed.splice(0, 1);

        recentlyViewed.push(csstemplate);
        return recentlyViewed;
    };

    return factory;
}]);
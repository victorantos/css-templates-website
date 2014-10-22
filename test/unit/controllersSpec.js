describe('homeCtrl', function () {
    beforeEach(module('home'));
    it('should have some default templates on homepage', inject(function ($controller) {
        var scope = {},
            ctrl = $controller('homeCtrl', { $scope: scope });
        expect(scope.defaultTemplates.length).toBe(1);
    }));
});

//'
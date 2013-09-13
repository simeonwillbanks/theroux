'use strict';

describe('Directive: map', function () {
  var element,
    scope;

  // load the directive's module
  beforeEach(module('therouxApp'));

  // load the templates
  beforeEach(module('appTemplates'));

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    scope.trips = ['los angeles']

    // DOM element for testing
    element = angular.element('<map trips="trips"></map>');

    // Compile and apply scope
    element = $compile(element)(scope);
    scope.$apply();
  }));

  it('should list trips', inject(function ($compile) {
    expect(element.text()).toMatch(/los angeles/);
  }));
});

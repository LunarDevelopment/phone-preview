'use strict';

describe('Directive: phonePreview', function () {

  // load the directive's module
  beforeEach(module('phonepreviewApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<phone-preview></phone-preview>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the phonePreview directive');
  }));
});

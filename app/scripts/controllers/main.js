'use strict';

/**
 * @ngdoc function
 * @name phonepreviewApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the phonepreviewApp
 */
angular.module('phonepreviewApp')
  .controller('MainCtrl', function () {
  var vm = this; 
  vm.phoneSettings = {
    url: 'http://www.lunar-development.co.uk/',
    view: 'front',
    image: 'images/iphone6_front_black.png',
    id: 'phone-preview'
  };
});

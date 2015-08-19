'use strict';

/**
 * @ngdoc directive
 * @name phonepreviewApp.directive:phonePreview
 * @description
 * # phonePreview
 */
angular.module('phonepreviewApp')
  .directive('phonePreview', function () {
  return {
    template: '<div></div>',
    restrict: 'E',
    scope: { obj: '=' },
    link: function postLink(scope, element) {

      function setOption(option, _default) {
        return (typeof option === 'undefined') ? _default : option;
      }

      // Private
      var front = {width: 428, height: 889, ratio: (428 / 889)},
          side = {width: 302, height: 889, ratio: (302 / 889)};

      // Options
      var options =  scope.obj || {},
          url = setOption(options.url, ''),
          view = setOption(options.view, 'front'),
          image = setOption(options.image, ''),
          scale = setOption(options.scale, 0),
          width = setOption(options.width, 0),
          height = setOption(options.height, 0),
          id = setOption(options.id, '');

      function setSizes() {
        var selView = (view === 'front') ? front : side;

        if(scale !== 0) {
          width = (selView.width * scale);
          height = (selView.height * scale);
          return;
        }

        if(width !== 0) {
          scale = (width / selView.width);
          height = (width / selView.ratio);
          return;
        }

        if(height !== 0) {
          scale = (height / selView.height);
          width = (height * selView.ratio);
          return;
        }

        scale = 1;
        width = selView.width;
        height = selView.height;
      }

      function create() {
        element.context.id = options.id;
        // Set view dimensions
        var selView = (view === 'front') ? front : side;

        // Set scrollbar CSS		
        var css = document.createTextNode(
          '.bio-mp-screen::-webkit-scrollbar {width: 6px; height: 6px;}' +
          '.bio-mp-screen::-webkit-scrollbar-track {background: none; -webkit-border-radius: 10px; border-radius: 10px;}' +
          '.bio-mp-screen::-webkit-scrollbar-thumb {-webkit-border-radius: 10px; border-radius: 10px; background: #777;}' +
          '.bio-mp-screen::-webkit-scrollbar-thumb:window-inactive {background: #777;}'
        );

        var style = angular.element('<style></style>');
        style[0].type = 'text/css';
        style.append(css);

        // Add phone div
        var phone = angular.element('<div></div>');
        element.append(phone);

        // Add phone image
        var phoneImage = angular.element('<img></img>');
        phoneImage[0].src = image;
        phone.append(phoneImage);

        // Add iframe
        var iframe = angular.element('<iframe></iframe>');
        iframe[0].src = url;
        iframe[0].className = 'bio-mp-screen';
        phone.append(iframe);

        // Add CSS
        var wrapCss = 'width: ' + width + 'px; height: ' + height + 'px; overflow: hidden; transform-origin: 0 0 0;';
        var phoneCss = 'margin-left: auto; margin-right: auto; position: relative; top: 0px; left: 0px; width: ' + selView.width + 'px; height: ' + selView.height + 'px; background: none; -webkit-transform-origin: 0 0 0; -moz-transform-origin: 0 0 0; -ms-transform-origin: 0 0 0; -o-transform-origin: 0 0 0; transform-origin: 0 0 0; -webkit-transform: scale(' + scale + '); -moz-transform: scale(' + scale + '); -ms-transform: scale(' + scale + '); -o-transform: scale(' + scale + '); transform: scale(' + scale + ');';
        var phoneImageCss = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%;';
        var screenCss = '';
        if(view === 'front') {
          screenCss = 'position: absolute; top: 109px; left: 26.5px; width: 375px; height: 669px; border: 0;'; }
        else if (view === 'left') {
          screenCss = 'position: absolute; top: 135px; left: -60px; width: 375px; height: 669px; border: 0; -webkit-transform: matrix3d(0.682, -0.160, 0, -0.000380, 0, 0.972, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); -moz-transform: matrix3d(0.682, -0.160, 0, -0.000380, 0, 0.972, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); -ms-transform: matrix3d(0.682, -0.160, 0, -0.000380, 0, 0.972, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); -o-transform: matrix3d(0.682, -0.160, 0, -0.000380, 0, 0.972, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0.682, -0.160, 0, -0.000380, 0, 0.972, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);';
        }
        else {
          screenCss = 'position: absolute; top: 135px; left: -13px; width: 375px; height: 669px; border: 0; -webkit-transform: matrix3d(0.682, 0.160, 0, 0.000380, 0, 0.972, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); -moz-transform: matrix3d(0.682, 0.160, 0, 0.000380, 0, 0.972, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); -ms-transform: matrix3d(0.682, 0.160, 0, 0.000380, 0, 0.972, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); -o-transform: matrix3d(0.682, 0.160, 0, 0.000380, 0, 0.972, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(0.682, 0.160, 0, 0.000380, 0, 0.972, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);';
        }
        element.context.style.cssText += wrapCss;
        element.context.id = id;
        phone[0].style.cssText = phoneCss;
        phoneImage[0].style.cssText = phoneImageCss;
        iframe[0].style.cssText = screenCss;

        // Add scrollbar CSS above the wrap
        element.context.parentNode.insertBefore(style[0], element.context);
      }
      // Init
      setSizes();
      create();
    }
  };
});

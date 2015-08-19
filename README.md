# phone-preview Directive

###An AngularJS directive for rendering a preview of an app / website within an iPhone frame. [Demo](http://www.lunar-development.co.uk/Projects/phone-preview/)

# Features

* Simple to use, just how a Directive should be! 
* Currently supports iPhone 6.
* 3 different perspectives - front, left, and right facing.
* Choose from the black, white, and gold versions.
* Scrollbars modified for webkit to resemble track and thumb of iPhone 6

# Usage

Place the script and images on your server.

Include the script.

```html
<script src="scripts/directives/phone-preview.js"></script>
```

Create a div element, which will contain the preview.

####Controller As:
```html
<phone-preview obj="main.phoneSettings"></phone-preview>
```
####$scope:
```html
<phone-preview obj="phoneSettings"></phone-preview>
```
Cofigure options in your controller: 

Controller As:
```javascript
this.phoneSettings = {
url: 'http://www.lunar-development.com',
view: 'front',
image: 'images/iphone6_front_black.png',
id: 'phone-preview'
};
```
$scope:
```javascript
$scope.phoneSettings = {
url: 'http://www.lunar-development.com',
view: 'front',
image: 'images/iphone6_front_black.png',
id: 'phone-preview'
};
```


Name | Type | Default | Description
-----|------|------|---------|------------
**url** | required | string | blank | URL of the web page to preview.
**id** | optional | string | blank | An ID that will be asigned to the created HTML element.
**view** | required | string | front | The perspective of the phone.  Possible values are **front**, **left**, and **right**.
**image** | required | string | blank | URL of the image to use for the phone. A total of 9 images are included with this script.
**scale** | optional | float | 1 | Resize the phone preview by a multiplier value. For instance, a value of 1 is full size, while 0.5 would half the size. If this option is set, both width and height options are ignored.
**width** | optional | integer | 428 | The width of the phone in pixels. If this option is set, the height option is automatically set to proportion. If scale is not set, it will be automatically set to proportion as well.
**height** | optional | integer | 889 | The height of the phone in pixels. If this option is set, both the scale and width options are ignored and automatically set to proportion.


# Credits

Thank you to JustD for the images of the iPhone 6.  You can find his work [here on Behanced](https://www.behance.net/justd).

Thank you to the JS library creator on which this Directive is based [beeker.io](http://beeker.io/display-website-in-iphone-html-css-javascript), [website-mobile-preview](https://github.com/beeker1121/website-mobile-preview)

<a href="https://github.com/beeker1121/website-mobile-preview">Original Repo</a>

# License

MIT license, feel free to use however you wish!

Created by [Lunar Development](http://www.lunar-development.co.uk/)
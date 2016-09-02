sliders.js
==========

sliders.js is a tiny jQuery slideshow plugin.

##1. Setup

Include the latest jQuery Library as well as sliders.js just before your closing body tag

```html
<script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
<script src="/js/sliders.min.js"></script>
<link rel="stylesheet" href="/css/sliders.min.css">
```

##2. HTML Markup
*note: the .page, .pager and data-target values are important
```html
<div class="=sliders"> <!--this is the default class in sliders.css-->
  <figure class="slides">
   <img src='/img/sliders.png' />
  <figcaption> <!--optional-->
   Your captions
  </figcaption>
  </figure>
  <div class="page" id="arrow_right" data-target="next"></div> <!--uses data-target to move through slides-->
  <div class="page" id="arrow_left" data-target="prev"></div>
  <ul class="pager"></ul> <!--optional but necessary for pager bullets-->

</div>
```
##3. CSS
```css
.sliders {
position: relative;
float: left;
width: 100%;
height: 400px;
}

.sliders > figure {
position: absolute;
opacity: 0;
width: 100%;
top: 0;
left: 0;
right: 0;
bottom: 0;
height: 100%;
}

.sliders > figure img {
width: 100%;
height: 100%;
z-index: 1;
}
```

##4. Usage
Start the show....

```javascript
$(".sliders").sliders();
```
or with options:
```javascript
$('.slideshow').sliders({
  "auto" : false,             //default false, auto start
  "speed" : 500,              //speed of the transition (default 500)
  "timeout" : 7000,           //time between slides (default 7000)
  "bullets" : false,          //pager bullets (default false)
  "animate": false,           //animates the slide, use in conjuction with direction
  "direction": "left"         //direction of the slide animation (must set this when using animate:true)
  easing: 'jswing'            //option easing functions (ease In only, see http://easings.net/ for your options)
});
```

##5. Demo
For a more in depth view, see the example
http://www.dylan-foster.com/sliders

##Credits
[jQuery](http://api.jquery.com/)<br>

##Contact
Copyright (C) 2014 Dylan foster<br>
[Fostered Development](http://www.dylan-foster.com)<br>
[Github](https://github.com/dylan947/)<br>
[@dylfos](http://twitter.com/dylfos)<br>
[+Fostered Development](https://plus.google.com/b/103850011544407258916/103850011544407258916/about)




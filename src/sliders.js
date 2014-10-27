"use strict";

(function ($) {

  var methods = {
    init: function (options, easing) {
      return this.each(function () {
        var settings = {
          "auto": false,
          "speed": 500,
          "timeout": 7000,
          "bullets": false,
          "animate": false,
          "direction": [
            "left", "right", "top", "bottom"
          ],
          easing: "jswing"
        };

        if (options) {
          $.extend(settings, options, easing);

        }

        this.settings = settings;
        var $page, $pager;
        var $cont = $(this);
        var img = $cont.children("figure");
        var count = img.length;
        var fading = false;
        var slideTimer;
        var activeSlide;
        var newSlide;

        if (settings.bullets) {
          $pager = $cont.find(".pager");

          for (var i = 0; i < count; i++) {
            $pager.append("<li class=\"page\" id=" + i + ">" + i + "</li>");
            $("li#" + i).attr("data-target", i);
          }

          $page = $pager.children(".page");
          $page.eq(0).addClass("active");

        }

        function waitForNext() {
          slideTimer = setTimeout(function () {
            changeSlides("next");
          }, settings.timeout);
        }

        function animateSlides(activeNdx, newNdx) {
          function cleanUp() {
            img.eq(activeNdx).removeAttr("style");
            activeSlide = newNdx;
            fading = false;
            waitForNext();
          }

          if (fading || activeNdx === newNdx) {
            return false;
          }

          fading = true;

          if ($pager.length) {
            $page.removeClass("active").eq(newSlide).addClass("active");
          }

          img.eq(activeNdx).css("z-index", 3);
          img.eq(newNdx).css({
            "z-index": 2,
            "opacity": 1
          });


          if (settings.animate) {
            switch (settings.direction) {
            case "left":
              img.eq(activeNdx).stop().animate({
                  "left": "-9999px"
                }, settings.speed, settings.easing,
                function () {
                  cleanUp();
                });
              break;

            case "right":
              img.eq(activeNdx).stop().animate({
                  "right": "-9999px",
                  "left": "9999px"
                }, settings.speed, settings.easing,
                function () {
                  cleanUp();
                });
              break;

            case "top":
              img.eq(activeNdx).stop().animate({
                  "top": "-9999px",
                  "bottom": "9999px"
                }, settings.speed, settings.easing,
                function () {
                  cleanUp();
                });
              break;

            case "bottom":
              img.eq(activeNdx).stop().animate({
                  "top": "9999px",
                  "bottom": "-9999px"
                }, settings.speed, settings.easing,
                function () {
                  cleanUp();
                });
              break;

            }
          } else {

            img.eq(activeNdx).stop().animate({
                "opacity": 0
              }, settings.speed,
              function () {
                cleanUp();
              });
          }


        }

        function changeSlides(target) {
          if (target === "next") {
            newSlide = activeSlide + 1;
            if (newSlide > count - 1) {
              newSlide = 0;
            }
          } else if (target === "prev") {
            newSlide = activeSlide - 1;
            if (newSlide < 0) {
              newSlide = count - 1;
            }
          } else {
            newSlide = target;
          }
          animateSlides(activeSlide, newSlide);
        }

        img.eq(0).css({
          "opacity": 1
        });

        activeSlide = 0;

        if (settings.auto) {
          waitForNext();
        }

        $cont.find(".page").bind("click", function () {
          var target = $(this).attr("data-target");
          clearTimeout(slideTimer);
          changeSlides(target);
        });
      });
    }
  };

  $.fn.sliders = function (settings) {
    return methods.init.apply(this, arguments);
  };
})(jQuery);

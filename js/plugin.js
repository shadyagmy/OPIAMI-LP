/*global window, $ */
$(function () {
    "use strict";

    $(".header").height($(window).height());

    $(window).resize(function () {
        $(".header").height($(window).height());
    });


    $(".header .over-lay .menu > ul >li").hover(function () {
        $(this).find(">ul").stop().fadeToggle().css("color", "#fff");
        $(this).addClass("color-link").siblings().removeClass("color-link");

    });

    $(".header .over-lay .menu > ul >li").mouseleave(function () {
        $(this).removeClass("color-link");

    });

    $(".main-head button").on({

        mouseenter: function () {
            $(this).css("background-color", "#56AED4");
        },
        mouseleave: function () {
            $(this).css("background", "none");
        }
    });

    $(".article-1 .parts section").mouseenter(function () {

        $(this).find("a").fadeTo("fast", 1);
    });

    $(".article-1 .parts section").mouseleave(function () {

        $(this).find("a").fadeTo("slow", 0);
    });
});

$(function(){$(".js-sticky-header").sticky({topSpacing:0}),$(".js-clone-nav").each(function(){$(this).clone().attr("class","site-nav-wrap").appendTo(".site-mobile-menu-body")}),setTimeout(function(){var a=0;$(".site-mobile-menu .has-children").each(function(){var b=$(this);b.prepend('<span class="arrow-collapse collapsed">'),b.find(".arrow-collapse").attr({"data-toggle":"collapse","data-target":"#collapseItem"+a}),b.find("> ul").attr({class:"collapse",id:"collapseItem"+a}),a++})},1e3),$("body").on("click",".arrow-collapse",function(b){var a=$(this);a.closest("li").find(".collapse").hasClass("show")?a.removeClass("active"):a.addClass("active"),b.preventDefault()}),$(window).resize(function(){$(this).width()>768&&$("body").hasClass("offcanvas-menu")&&$("body").removeClass("offcanvas-menu")}),$("body").on("click",".js-menu-toggle",function(b){var a=$(this);b.preventDefault(),$("body").hasClass("offcanvas-menu")?($("body").removeClass("offcanvas-menu"),a.removeClass("active")):($("body").addClass("offcanvas-menu"),a.addClass("active"))}),$(document).mouseup(function(a){var b=$(".site-mobile-menu");!b.is(a.target)&&0===b.has(a.target).length&&$("body").hasClass("offcanvas-menu")&&$("body").removeClass("offcanvas-menu")})})
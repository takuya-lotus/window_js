$(function() {

	// window height javascript
	hsizeFull = $(window).height() ;
	$(".full-content").css("height", hsizeFull  + "px");
	hsizeHalf = $(window).height()/2 ;
	$(".half-content").css("height", hsizeFull  + "px");
	$(".half-title").css("height", hsizeHalf  + "px");

	// resize version
	$(window).resize(function () {
	  hsizeFull = $(window).height();
	  $(".full-content").css("height", hsizeFull + "px");
		hsizeHalf = $(window).height()/2;
		$(".half-content").css("height", hsizeFull  + "px");
		$(".half-title").css("height", hsizeHalf  + "px");
	});

});

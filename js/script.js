"use strict"; // Start of use strict

var mobile = false;
$(window).on('load', function () {
	
	// Page loader
	$(".se-pre-con").delay(200).fadeOut("slow");

	$(window).scroll();
	$(window).resize();
	
});

$(document).ready(function() {
	
	check_mobile();
	init_nav();
	init_fullpage();
	init_parallax();
	init_wow();
	init_map();
	init_mouse_events(); 
	init_contact();

});

function check_mobile() {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		mobile = true;
	}
}

function init_nav() {
	$(document).scroll(function () {
		var $nav = $(".navbar-fixed-top");
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height() + 200);
	});
}

function init_fullpage() {
	$('#fullpage').fullpage({
		navigation: true,
        autoScrolling: false,
        fitToSection: false,
		animateAnchor: true,
		anchors: ['home', 'about', 'services', 'portfolio', 'contact', 'footer', 'slide-app', 'slide-web'],
		menu: '#myMenu',
		css3: true,
		controlArrows: false,
	    lazyLoading: true
	});
}

function init_parallax() {
	var width = $( window ).width();
	var image = "images/main_full.jpg";
	if(width <= 640) 
		image = "images/main_640.jpg";
	else if(width <= 768)
		image = "images/main_1024.jpg";
	$('.home').parallax({imageSrc: image});
}

function init_wow() {
	var wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 90,
		mobile: true, 
		live: true 
	});
	
	if ($("body").hasClass("appear-animate")){
	   wow.init(); 
	}        
}

function init_map() {
	// Provide your access token
	L.mapbox.accessToken = 'pk.eyJ1IjoiZmludGFzeXMiLCJhIjoiY2ltcWN5ZG5qMDAyNndlbTJpYjVqdzBmNCJ9.KFxdi6cDZzQNewCQQGJgmA';
	// Create a map in the div #map
	var map = L.mapbox.map('map', 'mapbox.streets', {
		center: [35.704505, 139.619882],
		zoom: 13,
		scrollWheelZoom: false
	});
	L.marker([35.704505, 139.619882]).addTo(map);
	L.mapbox.styleLayer("mapbox://styles/fintasys/cj02ibcnr00162smjkp9yk7yw").addTo(map);
}

function init_mouse_events() {
	$('.portrait-wrapper').mouseover(function() {
		$('.portrait-detail').addClass("portrait-detail-hover");
	});
	$('.portrait-wrapper').mouseout(function() {
		$('.portrait-detail').removeClass("portrait-detail-hover");
	});
	$('.portfolio-wrapper').mouseover(function(e) {
		$(e.currentTarget).find('.portfolio-detail').addClass("portfolio-detail-hover");
	});
	$('.portfolio-wrapper').mouseout(function(e) {
		$(e.currentTarget).find('.portfolio-detail').removeClass("portfolio-detail-hover");
	});
}

function init_contact() {
	$( "form" ).submit(function( event ) {
	  $('#submit').prop("disabled",true);
	  var name = $('#name').val();
	  var email = $('#email').val();
	  var message = $('#message').val();
	  sendContact(name, email, message);
	  return false;
	});
}

function sendContact(name, email, message) {
	var sending = $.post( "contact.php", { name: name, email: email, message: message } );
	sending.done(function( data ) {
		$('.contact-form').fadeOut(function() {
			$('.contact').show();
			$('#submit').prop("disabled",false);
		});
	});
}

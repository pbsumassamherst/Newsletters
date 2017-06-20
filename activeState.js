// JavaScript Document
$(function() {

	//highlight the current nav
	$("#web a:contains('Web')").parent().addClass('active');
	$("#graphic a:contains('Graphic')").parent().addClass('active');
	$("#illustration a:contains('Illustration')").parent().addClass('active');
	$("#contact a:contains('Contact')").parent().addClass('active');
		
	/*
	if($("#photographer_pack a:contains('Photographer\'s Package')").parent().hasClass('active')){
	$(".dropdown a:contains('Our Programs')").parent().addClass('active');
	}
	
	if($("#joomla a:contains('Joomla Training')").parent().hasClass('active')){
	$(".dropdown a:contains('Our Programs')").parent().addClass('active');
	}
	*/

	//make menus drop automatically
	/*
	$('ul.nav li.dropdown').hover(function() {
		$('.dropdown-menu', this).fadeIn();
	}, function() {
		$('.dropdown-menu', this).fadeOut('fast');
	});//hover
	*/
}); //jQuery is loaded
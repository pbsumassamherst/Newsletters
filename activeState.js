// JavaScript Document
$(function() {

	//highlight the current nav
	$("#current a:contains('Current Issue')").parent().addClass('active');
	/* 
	$("#past a:contains('Past Issues')").parent().addClass('active');
	*/
		
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
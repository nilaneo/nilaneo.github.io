$(function() {
	var $homeLink = $('.j-home-link'),
		$resumeLink = $('.j-resume-link'),
		$projectsLink = $('.j-projects-link'),
		$contactLink = $('.j-contact-link');

	$('.j-alternative-home-link').on('click', function (e) {
		e.preventDefault();
		$homeLink.trigger('click');
	});

	$('.j-alternative-resume-link').on('click', function (e) {
		e.preventDefault();
		$resumeLink.trigger('click');
	});

	$('.j-alternative-projects-link').on('click', function (e) {
		e.preventDefault();
		$projectsLink.trigger('click');
	});

	$('.j-alternative-contact-link').on('click', function (e) {
		e.preventDefault();
		$contactLink.trigger('click');
	});

});
'use strict';

(function($){
	$(document).ready(function() {
		// Code

function isoImages() {
	$('.blocks').isotope({
		itemSelector: '.blocks__img',
		percentPosition: true,
		masonry: {
			columnWidth: '.sizer',
			gutter: 7
		}
	});

	$('.filters').on('click', 'li', function() {
		var val = $(this).data('filter');
		$('.blocks').isotope({filter: val})
	});

	if ($(window).innerWidth() < 576) {
		$('.blocks').isotope({
			masonry: {
				gutter: 0
			}
		});
	}
}

	});
})(jQuery);

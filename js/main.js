(function($) {
	$(function() {
		// Tabbed Boxes
		$('.flex-tabs').each(function() {
			var t = jQuery(this),
				tab = t.find('.tab-list li a'),
				tabs = t.find('.tab');

			tab.click(function(e) {
				var x = jQuery(this),
					y = x.data('tab');

				// Set Classes on Tabs
				tab.removeClass('active');
				x.addClass('active');

				// Show/Hide Tab Content
				tabs.removeClass('active');
				t.find('.' + y).addClass('active');

				e.preventDefault();
			});
		});
	});
})(jQuery);

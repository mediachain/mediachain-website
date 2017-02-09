;(function($, window, document, undefined) {
	// vars
	var $win = $(window);
	var $doc = $(document);

	$doc.on('ready', function() {
		// tabs on homepage
		$('.tabs .tabs-nav a').on('click', function(e) {
			var $this = $(this);
			var href = $this.attr('href');

			$(href).addClass('active').siblings().removeClass('active');
			$(this).parent().addClass('active').siblings().removeClass('active');

			e.preventDefault();
		});

		// mobile navigation
		$('.menu-btn').on('click', function(e) {
			$(this)
				.toggleClass('expanded')
				.next('.nav-holder').stop(true).slideToggle();

			e.preventDefault();
		});

		// header on click function
		$('.nav-holder ul li.menu-item-has-children > a').on('click', function(e) {
			if ($win.width() <= 767) {
				var $this = $(this);
				var $parent = $this.parent();

				$parent.siblings('li.menu-item-has-children')
					.removeClass('expanded')
					.find('> ul').stop(true).slideUp();

				if (!$parent.hasClass('expanded')) {
					$this.next('ul').stop(true).slideDown();

					e.preventDefault();
				};

				$this.parent().addClass('expanded');
			};
		});
	});

	$win
		.on('load', function() {
			
		});
})(jQuery, window, document);
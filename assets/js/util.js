(function($) {

	/**
	 * Generate an indented list of links from a nav. Meant for use with panel().
	 * @return {jQuery} jQuery object.
	 */
	$.fn.navList = function() {

		var	$this = $(this);
			$a = $this.find('a'),
			b = [];

		$a.each(function() {

			var	$this = $(this),
				indent = Math.max(0, $this.parents('li').length - 1),
				href = $this.attr('href'),
				target = $this.attr('target');

			b.push(
				'<a ' +
					'class="link depth-' + indent + '"' +
					( (typeof target !== 'undefined' && target != '') ? ' target="' + target + '"' : '') +
					( (typeof href !== 'undefined' && href != '') ? ' href="' + href + '"' : '') +
				'>' +
					'<span class="indent-' + indent + '"></span>' +
					$this.text() +
				'</a>'
			);

		});

		return b.join('');

	/**
	 * Generate an indented searchbar. Meant for use with panel().
	 * @return {jQuery} jQuery object.
	 */

	};

	$.fn.searchList = function() {

		var	$this = $(this);
			$a = $this.find('a'),
			b = [];

		$a.each(function() {

			var	$this = $(this),
				indent = Math.max(0, $this.parents('li').length - 1),
				href = $this.attr('href'),
				target = $this.attr('target');

			b.push(
				'<a ' +
					'class="link depth-' + indent + '"' +
					( (typeof target !== 'undefined' && target != '') ? ' target="' + target + '"' : '') +
					( (typeof href !== 'undefined' && href != '') ? ' href="' + href + '"' : '') +
				'>' +
					'<span class="indent-' + indent + '"></span>' +
					$this.text() +
				'</a>'
			);

		});

		return b.join('');

	};
	

	/**
	 * Sticky Elements.
	 */

	/* $(window).scroll(function() {
		
		if ($(this).scrollTop() > 300){  
		
    		$('#subnav').addClass("sticky");
			$('#first-article').addClass("sticky");
			
  		}
		
  		else{
			
    		$('#subnav').removeClass("sticky");
			$('#first-article').removeClass("sticky");
			
  		}
		
	}); */
	
	
	/**
	* Fixed SubNavigation on Scroll
	*/
	
	/* $(document).scroll(function(){
		
		var navClass = $('#subnav');
		var testTop = $('#subnav').offset().top - $(document).scrollTop();
		var articleTop = $('#articles-tab').offset().top - $(document).scrollTop();
		var videoTop = $('#videos-tab').offset().top - $(document).scrollTop();
			
		if (testTop < 70 && !navClass.is('.sticky')){
			$('#subnav').addClass('sticky'),
			$('#articles-tab').addClass('sticky');
			$('#videos-tab').addClass('sticky');
		}
		
		if (articleTop > 170 && navClass.is('.sticky')){
			$('#subnav').removeClass('sticky'),
			$('#articles-tab').removeClass('sticky'),
			$('#videos-tab').removeClass('sticky');
		}
		
		if (videoTop > 170 && navClass.is('.sticky')){
			$('#subnav').removeClass('sticky'),
			$('#articles-tab').removeClass('sticky'),
			$('#videos-tab').removeClass('sticky');
		}
		 
	}); */
	
	
	/**
	* Fixed Search Bar on Scroll
	*/
	
	/* $(window).scroll(function() {
		
		if ($(this).scrollTop() > 1){  
		
    		$('#search').addClass("sticky");
			
  		}
		
  		else{
			
    		$('#search').removeClass("sticky");
			
  		}
		
	}); */


	/**
	 * Tab Panels
	 */

	$('.tab-list').each(function(){                   // Find lists of tabs
	  var $this = $(this);                            // Store this list
	  var $tab = $this.find('li.active');             // Get the active list item
	  var $link = $tab.find('a');                     // Get link from active tab
	  var $panel = $($link.attr('href'));             // Get active panel
	
	  $this.on('click', '.tab-control', function(e) { // When click on a tab
	  
		e.preventDefault();                           // Prevent link behavior
		
		/* $('body, html').animate({"scrollTop" : 300}, 400); */
		
		var $link = $(this),                          // Store the current link
			id = this.hash;                           // Get href of clicked tab 
	
		if (id && !$link.is('.active')) {             // If not currently active
		  $panel.removeClass('active');               // Make panel inactive
		  $tab.removeClass('active');                 // Make tab inactive
	
		  $panel = $(id).addClass('active');          // Make new panel active
		  $tab = $link.parent().addClass('active');   // Make new tab active 
		}
	  });
	});


	/**
	 * Picture Viewer
	 */
	 
	 $('#thumb-one').on('click', function(e) { // When click on a tab
	  
		e.preventDefault();                           	 // Prevent link behavior

		$('#full-one').removeClass('hidden');               // Make panel inactive
		$('#full-two').addClass('hidden');            // Make tab inactive
		
	  });

	  $('#thumb-two').on('click', function(e) { // When click on a tab
	  
		e.preventDefault();                           	 // Prevent link behavior

		$('#full-one').addClass('hidden');               // Make panel inactive
		$('#full-two').removeClass('hidden');            // Make tab inactive
		
	  });
	  
	  $('#thumb-one').eq(0).click();


	/**
	 * Delay display of Header Text elements.
	 */
	
	$(document).ready(function() {
		
    	$('header h2').delay(600).fadeTo(1200, 1);
		
	});
	
	$(document).ready(function() {
		
    	$('header p').delay(900).fadeTo(1200, 1);
		
	});
	
	$(document).ready(function() {
		
    	$('header .actions').delay(1300).fadeTo(1200, 1);
		
	});
	
	
	/**
	 * Accordian Expand & Collapse Text.
	 */
	
	$('.accordion').on('click', '.accordion-control', function(e){ // When clicked
	
	  e.preventDefault();                    // Prevent default action of button
	  
	  $(this)								 // Get the element the user clicked on
	  
	  	.children('.expandicon')		 	 // Select the expandicon element  
	  	.toggleClass("open closed");	 	 // Toggle between open and closed
	  
	  /* $(this).toggleClass("highlighton highlightoff"); */	 // Toggle between highlight color
	  
	  $(this)                                // Get the element the user clicked on
	  
		.next('.accordion-panel')            // Select following panel
		.stop()
		.not(':animated')                    // If it is not currently animating
		.slideToggle();                      // Use slide toggle to show or hide it
		
	});
	

	/**
	 * Photo Viewer
	 */
	 
	 /* var request;
	 var $current;
	 var cache = {};
	 var $frame = $('#photo-viewer');
	 var $thumbs = $('.thumb');
	 
	 function crossfade($img) {
		 
		 if ($current) {
			 $current .stop().fadeOut('fast');
		 }
		 
		 $img.stop().fadeTo('fast', 1);
		 
		 $current = $img;
		 
	 }
	 
	 $(document).on('click', '.thumb', function(e) {
		 var $img;
		 var src = this.href;
		 request = src;
		 
		 e.preventDefault();
		 
		 $thumbs.removeClass('active');
		 $(this).addClass('active');
		 
		 if (cache.hasOwnProperty(src)) {
			 if (cache[src].isLoading === false) {
				 crossfade(cache[src].$img);
			 }
		 } else {
			 $img = $('<img/>');
			 cache[src] = {
				 $img: $img,
				 isLoading: true
			 };
			 
			 $img.on('load', function() {
				 $img.hide();
				 $frame.removeClass('is-loading').append($img);
				 cache[src].isLoading = false;
				 if (request === src) {
					 crossfade($img);
				 }
			 });
			 
			 $frame.addClass('is-loading');
			 
			 $img.attr({
				 'src': src,
				 'alt': this.title || ''
			 });
			 
		 }
		 
	 });
	 
	 $('.thumb').eq(0).click(); */
			 


	/**
	 * Fancybox Gallery.
	 */
	 
	$(document).ready(function() {
	
		/* This is basic - uses default settings */
		
		$("a.single_image").fancybox();
		
		/* Using custom settings */
		
		$("a#inline").fancybox({
			'hideOnContentClick': true
		});
	
		/* Apply fancybox to multiple items */
		
		$("a.group").fancybox({
			'transitionIn'	:	'elastic',
			'transitionOut'	:	'elastic',
			'speedIn'		:	600, 
			'speedOut'		:	200, 
			'overlayShow'	:	false
		});
		
	});
	
	
	/**
	 * Fancybox iFrame Video Viewer.
	 */
	
	$(document).ready(function() {
		$(".various").fancybox({
			maxWidth	: 1050,
			minWidth	: 375,
			maxHeight	: 700,
			minHeight	: 200,
			fitToView	: false,
			width		: '100%',
			height		: '70%',
			autoSize	: false,
			closeClick	: false,
			openEffect	: 'none',
			closeEffect	: 'none'
		});
	});
	
	
	/**
	* Display an element on scroll.
	*/
	
	/*$(document).ready(function() {
   
    Every time the window is scrolled ...
    $(window).scroll( function(){
    
        /* Check the location of each desired element
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });
    
});*/


	/**
	 * Panel-ify an element.
	 * @param {object} userConfig User config.
	 * @return {jQuery} jQuery object.
	 */
	$.fn.panel = function(userConfig) {

		// No elements?
			if (this.length == 0)
				return $this;

		// Multiple elements?
			if (this.length > 1) {

				for (var i=0; i < this.length; i++)
					$(this[i]).panel(userConfig);

				return $this;

			}

		// Vars.
			var	$this = $(this),
				$body = $('body'),
				$window = $(window),
				id = $this.attr('id'),
				config;

		// Config.
			config = $.extend({

				// Delay.
					delay: 0,

				// Hide panel on link click.
					hideOnClick: false,

				// Hide panel on escape keypress.
					hideOnEscape: false,

				// Hide panel on swipe.
					hideOnSwipe: false,

				// Reset scroll position on hide.
					resetScroll: false,

				// Reset forms on hide.
					resetForms: false,

				// Side of viewport the panel will appear.
					side: null,

				// Target element for "class".
					target: $this,

				// Class to toggle.
					visibleClass: 'visible'

			}, userConfig);

			// Expand "target" if it's not a jQuery object already.
				if (typeof config.target != 'jQuery')
					config.target = $(config.target);

		// Panel.

			// Methods.
				$this._hide = function(event) {

					// Already hidden? Bail.
						if (!config.target.hasClass(config.visibleClass))
							return;

					// If an event was provided, cancel it.
						if (event) {

							event.preventDefault();
							event.stopPropagation();

						}

					// Hide.
						config.target.removeClass(config.visibleClass);

					// Post-hide stuff.
						window.setTimeout(function() {

							// Reset scroll position.
								if (config.resetScroll)
									$this.scrollTop(0);

							// Reset forms.
								if (config.resetForms)
									$this.find('form').each(function() {
										this.reset();
									});

						}, config.delay);

				};

			// Vendor fixes.
				$this
					.css('-ms-overflow-style', '-ms-autohiding-scrollbar')
					.css('-webkit-overflow-scrolling', 'touch');

			// Hide on click.
				if (config.hideOnClick) {

					$this.find('a')
						.css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');

					$this
						.on('click', 'a', function(event) {

							var $a = $(this),
								href = $a.attr('href'),
								target = $a.attr('target');

							if (!href || href == '#' || href == '' || href == '#' + id)
								return;

							// Cancel original event.
								event.preventDefault();
								event.stopPropagation();

							// Hide panel.
								$this._hide();

							// Redirect to href.
								window.setTimeout(function() {

									if (target == '_blank')
										window.open(href);
									else
										window.location.href = href;

								}, config.delay + 10);

						});

				}

			// Event: Touch stuff.
				$this.on('touchstart', function(event) {

					$this.touchPosX = event.originalEvent.touches[0].pageX;
					$this.touchPosY = event.originalEvent.touches[0].pageY;

				})

				$this.on('touchmove', function(event) {

					if ($this.touchPosX === null
					||	$this.touchPosY === null)
						return;

					var	diffX = $this.touchPosX - event.originalEvent.touches[0].pageX,
						diffY = $this.touchPosY - event.originalEvent.touches[0].pageY,
						th = $this.outerHeight(),
						ts = ($this.get(0).scrollHeight - $this.scrollTop());

					// Hide on swipe?
						if (config.hideOnSwipe) {

							var result = false,
								boundary = 20,
								delta = 50;

							switch (config.side) {

								case 'left':
									result = (diffY < boundary && diffY > (-1 * boundary)) && (diffX > delta);
									break;

								case 'right':
									result = (diffY < boundary && diffY > (-1 * boundary)) && (diffX < (-1 * delta));
									break;

								case 'top':
									result = (diffX < boundary && diffX > (-1 * boundary)) && (diffY > delta);
									break;

								case 'bottom':
									result = (diffX < boundary && diffX > (-1 * boundary)) && (diffY < (-1 * delta));
									break;

								default:
									break;

							}

							if (result) {

								$this.touchPosX = null;
								$this.touchPosY = null;
								$this._hide();

								return false;

							}

						}

					// Prevent vertical scrolling past the top or bottom.
						if (($this.scrollTop() < 0 && diffY < 0)
						|| (ts > (th - 2) && ts < (th + 2) && diffY > 0)) {

							event.preventDefault();
							event.stopPropagation();

						}

				});

			// Event: Prevent certain events inside the panel from bubbling.
				$this.on('click touchend touchstart touchmove', function(event) {
					event.stopPropagation();
				});

			// Event: Hide panel if a child anchor tag pointing to its ID is clicked.
				$this.on('click', 'a[href="#' + id + '"]', function(event) {

					event.preventDefault();
					event.stopPropagation();

					config.target.removeClass(config.visibleClass);

				});

		// Body.

			// Event: Hide panel on body click/tap.
				$body.on('click touchend', function(event) {
					$this._hide(event);
				});

			// Event: Toggle.
				$body.on('click', 'a[href="#' + id + '"]', function(event) {

					event.preventDefault();
					event.stopPropagation();

					config.target.toggleClass(config.visibleClass);

				});

		// Window.

			// Event: Hide on ESC.
				if (config.hideOnEscape)
					$window.on('keydown', function(event) {

						if (event.keyCode == 27)
							$this._hide(event);

					});

		return $this;

	};
	
	
	// Back to Top Button.
			var amountScrolled = 300;

			$(window).scroll(function() {
				if ( $(window).scrollTop() > amountScrolled ) {
					$('a.backtotop').fadeIn('slow');
				} else {
					$('a.backtotop').fadeOut('slow');
				}
			});
			
			$('a.backtotop').click(function() {
			$('body, html').animate({
				scrollTop: 0
			}, 400);
			return false;
			});
	

	/**
	 * Apply "placeholder" attribute polyfill to one or more forms.
	 * @return {jQuery} jQuery object.
	 */
	$.fn.placeholder = function() {

		// Browser natively supports placeholders? Bail.
			if (typeof (document.createElement('input')).placeholder != 'undefined')
				return $(this);

		// No elements?
			if (this.length == 0)
				return $this;

		// Multiple elements?
			if (this.length > 1) {

				for (var i=0; i < this.length; i++)
					$(this[i]).placeholder();

				return $this;

			}

		// Vars.
			var $this = $(this);

		// Text, TextArea.
			$this.find('input[type=text],textarea')
				.each(function() {

					var i = $(this);

					if (i.val() == ''
					||  i.val() == i.attr('placeholder'))
						i
							.addClass('polyfill-placeholder')
							.val(i.attr('placeholder'));

				})
				.on('blur', function() {

					var i = $(this);

					if (i.attr('name').match(/-polyfill-field$/))
						return;

					if (i.val() == '')
						i
							.addClass('polyfill-placeholder')
							.val(i.attr('placeholder'));

				})
				.on('focus', function() {

					var i = $(this);

					if (i.attr('name').match(/-polyfill-field$/))
						return;

					if (i.val() == i.attr('placeholder'))
						i
							.removeClass('polyfill-placeholder')
							.val('');

				});

		// Password.
			$this.find('input[type=password]')
				.each(function() {

					var i = $(this);
					var x = $(
								$('<div>')
									.append(i.clone())
									.remove()
									.html()
									.replace(/type="password"/i, 'type="text"')
									.replace(/type=password/i, 'type=text')
					);

					if (i.attr('id') != '')
						x.attr('id', i.attr('id') + '-polyfill-field');

					if (i.attr('name') != '')
						x.attr('name', i.attr('name') + '-polyfill-field');

					x.addClass('polyfill-placeholder')
						.val(x.attr('placeholder')).insertAfter(i);

					if (i.val() == '')
						i.hide();
					else
						x.hide();

					i
						.on('blur', function(event) {

							event.preventDefault();

							var x = i.parent().find('input[name=' + i.attr('name') + '-polyfill-field]');

							if (i.val() == '') {

								i.hide();
								x.show();

							}

						});

					x
						.on('focus', function(event) {

							event.preventDefault();

							var i = x.parent().find('input[name=' + x.attr('name').replace('-polyfill-field', '') + ']');

							x.hide();

							i
								.show()
								.focus();

						})
						.on('keypress', function(event) {

							event.preventDefault();
							x.val('');

						});

				});

		// Events.
			$this
				.on('submit', function() {

					$this.find('input[type=text],input[type=password],textarea')
						.each(function(event) {

							var i = $(this);

							if (i.attr('name').match(/-polyfill-field$/))
								i.attr('name', '');

							if (i.val() == i.attr('placeholder')) {

								i.removeClass('polyfill-placeholder');
								i.val('');

							}

						});

				})
				.on('reset', function(event) {

					event.preventDefault();

					$this.find('select')
						.val($('option:first').val());

					$this.find('input,textarea')
						.each(function() {

							var i = $(this),
								x;

							i.removeClass('polyfill-placeholder');

							switch (this.type) {

								case 'submit':
								case 'reset':
									break;

								case 'password':
									i.val(i.attr('defaultValue'));

									x = i.parent().find('input[name=' + i.attr('name') + '-polyfill-field]');

									if (i.val() == '') {
										i.hide();
										x.show();
									}
									else {
										i.show();
										x.hide();
									}

									break;

								case 'checkbox':
								case 'radio':
									i.attr('checked', i.attr('defaultValue'));
									break;

								case 'text':
								case 'textarea':
									i.val(i.attr('defaultValue'));

									if (i.val() == '') {
										i.addClass('polyfill-placeholder');
										i.val(i.attr('placeholder'));
									}

									break;

								default:
									i.val(i.attr('defaultValue'));
									break;

							}
						});

				});

		return $this;

	};

	/**
	 * Moves elements to/from the first positions of their respective parents.
	 * @param {jQuery} $elements Elements (or selector) to move.
	 * @param {bool} condition If true, moves elements to the top. Otherwise, moves elements back to their original locations.
	 */
	$.prioritize = function($elements, condition) {

		var key = '__prioritize';

		// Expand $elements if it's not already a jQuery object.
			if (typeof $elements != 'jQuery')
				$elements = $($elements);

		// Step through elements.
			$elements.each(function() {

				var	$e = $(this), $p,
					$parent = $e.parent();

				// No parent? Bail.
					if ($parent.length == 0)
						return;

				// Not moved? Move it.
					if (!$e.data(key)) {

						// Condition is false? Bail.
							if (!condition)
								return;

						// Get placeholder (which will serve as our point of reference for when this element needs to move back).
							$p = $e.prev();

							// Couldn't find anything? Means this element's already at the top, so bail.
								if ($p.length == 0)
									return;

						// Move element to top of parent.
							$e.prependTo($parent);

						// Mark element as moved.
							$e.data(key, $p);

					}

				// Moved already?
					else {

						// Condition is true? Bail.
							if (condition)
								return;

						$p = $e.data(key);

						// Move element back to its original location (using our placeholder).
							$e.insertAfter($p);

						// Unmark element as moved.
							$e.removeData(key);

					}

			});

	};

})(jQuery);
(function($) {


	/**
	 * Sticky Header.
	 */

	$(window).scroll(function() {
		
		if ($(this).scrollTop() > 1){  
		
    		$('header').addClass("sticky");
			
  		}
		
  		else{
			
    		$('header').removeClass("sticky");
			
  		}
		
	});
	
	
	$(window).scroll(function() {
		
		if ($(this).scrollTop() > 1){  
		
    		$('#search').addClass("sticky");
			
  		}
		
  		else{
			
    		$('#search').removeClass("sticky");
			
  		}
		
	}); 



})(jQuery);



$(document).ready(function() {

	// Responsive Menu.js
	$('#nav-wrap').prepend('<div id="menu-icon"><span><img src="img/hamburger@2x.png"/></span>Menu</div>');
	$("#menu-icon").on("click", function(){
		$("#nav").slideToggle('medium', function() {
		    if ($('#nav').is(':visible'))
		        $('#nav').css('display','block');
		    if ($('#nav').is(':hidden'))
		        $('#nav').css('display','');    
		});
		
		$(this).toggleClass("active");
	});
  		


	// Parent-Nav Hover	
	$("li.nav-parent").hover(function(){
		$(this).addClass("hover");
	}, function(){
	    $(this).removeClass("hover");
	});
  	
  	
  	
	// FitVid.js
	$(".main-container").fitVids();  	
  
  	
  	// Stellar-Paralax.js
  	$(window).stellar()
  	
  	
  	// Scrollup.js
  	$.scrollUp({
  	    scrollName: 'scrollUp', // Element ID
  	    topDistance: '300', // Distance from top before showing element (px)
  	    topSpeed: 300, // Speed back to top (ms)
  	    animation: 'fade', // Fade, slide, none
  	    animationInSpeed: 200, // Animation in speed (ms)
  	    animationOutSpeed: 200, // Animation out speed (ms)
  	    scrollText: 'top', // Text for element
  	    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  	  });
  	
  	
  	
	// Fancybox.js
	$('.fancybox').fancybox();  
 
  	
  	
	// CleanTabs.js	
	$(".tab-container").cleanTabs();	
 

	
	// Toggle	  
	$('.toggle-btn').click(function(e){
	e.preventDefault();
	$(this).closest('li').find('.toggle-content').not(':animated').slideToggle();
	});
	
	// Add Class for Toggle
	$(".toggle-btn").click(function () {
	$(this).toggleClass("active");
	});
  
  
  
	// Accordion	  
	$('.accordion-btn').click(function(e){
		e.preventDefault();
		$this = $(this);
		$thisAccordionContent = $this.closest('li').find('.accordion-content');
		var currentStatus = "";
		if ($this.attr('class').indexOf('active') != -1) {
			currentStatus = "active";
		}
		//first close all and remove active class
		$this.closest('.accordion').find('li').each(function(index) {
			$thisLi = $(this);
			$thisLi.find('.accordion-btn').removeClass('active');
			$thisLi.find('.accordion-content').slideUp('400', function() {
				$(this).removeClass('active');
			});
		});
		if (currentStatus != "active") {
			$thisAccordionContent.not(':animated').slideDown();
			$this.addClass('active');
			$thisAccordionContent.addClass('active');
		}
	});
	
	  
  
	// Mosaic.js		 
	$('.fade').mosaic();
	 
 	 
  
  	// FlexSlider.js	 
	$('.flexslider').flexslider({
		animation: "fade",
	   	smoothHeight: false,
	   	touch: true,
	   	prevText: "S",
	   	nextText: "s",
	   	start: function(slider){
	    $('body').removeClass('loading');
	  }
	});
	 
	 
	$('.flexslider-quote').flexslider({
	  animation: "fade",
	  smoothHeight: true,
	  touch: true,
	  directionNav: false,
	  start: function(slider){
	    $('body').removeClass('loading');
	  }
	});
	 
	
	
	 
	// Isotope.js	 
	var $container = $('#thumb-gallery');
	  
	    $container.isotope({
	      masonry: {
	        columnWidth: 1 //was 26
	      },
	      sortBy: 'number',
	      getSortData: {
	        number: function( $elem ) {
	          var number = $elem.hasClass('element') ? 
	            $elem.find('.number').text() :
	            $elem.attr('data-number');
	          return parseInt( number, 10 );
	        },
	        alphabetical: function( $elem ) {
	          var name = $elem.find('.name'),
	              itemText = name.length ? name : $elem;
	          return itemText.text();
	        }
	      }
	    });
	     
	       
	var $optionSets = $('.meta.option-set'),
	          $optionLinks = $optionSets.find('a');
	
	      $optionLinks.click(function(){
	        var $this = $(this);
	        // don't proceed if already selected
	        if ( $this.hasClass('selected') ) {
	          return false;
	        }
	        var $optionSet = $this.parents('.option-set');
	        $optionSet.find('.selected').removeClass('selected');
	        $this.addClass('selected');
	  
	        // make option object dynamically, i.e. { filter: '.my-filter-class' }
	        var options = {},
	            key = $optionSet.attr('data-option-key'),
	            value = $this.attr('data-option-value');
	        // parse 'false' as false boolean
	        value = value === 'false' ? false : value;
	        options[ key ] = value;
	        if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
	          // changes in layout modes need extra logic
	          changeLayoutMode( $this, options )
	        } else {
	          // otherwise, apply new options
	          $container.isotope( options );
	        }
	        
	        return false;
	      });
	      
	      
	  // initialize Isotope after all images have loaded
	  var $container = $('#thumb-gallery').imagesLoaded( function() {
	    $container.isotope({
	      // options
	    });
	  });    	       
	       
	       	          	 
// End Call	 
});



// FitText.js
fitText(document.getElementById('fittext1'), 0.373)
fitText(document.getElementById('fittext2'), 1.1)




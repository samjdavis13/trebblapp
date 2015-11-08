function windowResized() {
	// Store window width
	var $width = $(window).width();
	
	// Swap email input placeholder dependant on device size
	if ($width < 640) {
		$('#email-input').attr('placeholder','Enter email');
	} else {
		$('#email-input').attr('placeholder','Enter your email to be notified when Trebbl is available');
	}
}


$(document).foundation();

$(function(){
	windowResized();
});
// When the window resizes
$(window).resize(function(){
	windowResized();
});


// Scrolling NAV
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 750);
        return false;
      }
    }
  });
});
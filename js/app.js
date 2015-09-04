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



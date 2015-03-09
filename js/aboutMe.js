$(document).ready(function(){
	$('#resumeStuff').hide();
	$('#projectStuff').hide();
	$('#resume').click(function(){
		 new WOW().init();
		$('#resume').toggleClass('woo');
		$('#projects').removeClass('woo');
		$('#resumeStuff').toggle('fast');
		if(!$('#resume').hasClass('woo')){
			$('#resumeStuff').hide();
				}
		if(!$('#projects').hasClass('woo')){
			$('#projectStuff').hide();
		}
		
	});

	$('#projects').click(function(){
		 new WOW().init();
		$('#projects').toggleClass('woo');
		$('#resume').removeClass('woo');
		$('#projectStuff').toggle('fast');
		if(!$('#projects').hasClass('woo')){
			$('#projectStuff').hide();
					}
		if(!$('#resume').hasClass('woo')){
			$('#resumeStuff').hide();
		}
	})
});
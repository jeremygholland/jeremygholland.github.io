$(document).ready(function(){
	if($(window).width() > 1700){
		$('#logo2').removeClass(".col-md-offset-1");
		$('#logo2').addClass(".col-md-offset-2");
	}
	$('#resumeStuff').hide();
	$('#projectStuff').hide();
	$('#skillsSection').hide();
	$('#resume').click(function(){
		 new WOW().init();
		$('#resume').toggleClass('woo');
		$('#projects').removeClass('woo');
		$('#skillsBtn').removeClass('woo');
		$('#resumeStuff').toggle('fast');
		if(!$('#resume').hasClass('woo')){
			$('#resumeStuff').hide();
				}
		if(!$('#projects').hasClass('woo')){
			$('#projectStuff').hide();
		}
		if(!$('#skillsBtn').hasClass('woo')){
		 	$('#skillsSection').hide();
		 }
		
	});

	$('#projects').click(function(){
		 new WOW().init();
		$('#projects').toggleClass('woo');
		$('#resume').removeClass('woo');
		$('#skillsBtn').removeClass('woo');
		$('#projectStuff').toggle('fast');
		if(!$('#projects').hasClass('woo')){
			$('#projectStuff').hide();
					}
		if(!$('#resume').hasClass('woo')){
			$('#resumeStuff').hide();
		}
		if(!$('#skillsBtn').hasClass('woo')){
		 	$('#skillsSection').hide();
		 }
	})
	$('#skillsBtn').click(function(){
		 new WOW().init();
		 $('#skillsBtn').toggleClass('woo');
		 $('#projects').removeClass('woo');
		 $('#resume').removeClass('woo');
		 $('#skillsSection').toggle('fast');
		 if(!$('#skillsBtn').hasClass('woo')){
		 	$('#skillsSection').hide();
		 }
		 if(!$('#resume').hasClass('woo')){
			$('#resumeStuff').hide();
		}
		if(!$('#projects').hasClass('woo')){
			$('#projectStuff').hide();
		}
	})
});
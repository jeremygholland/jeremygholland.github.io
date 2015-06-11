$(document).ready(function(){
	if($(window).width() > 1700){
		$('#logo2').removeClass(".col-md-offset-1");
		$('#logo2').addClass(".col-md-offset-2");
	}
	$('#one').addClass("letsTry");
	$('#resumeStuff').hide();
	$('#projectStuff').hide();
	$('#resume').click(function(){
		 new WOW().init();
		 $('#three').addClass("letsTry");
		 $('#two').removeClass("letsTry");
		 $('#one').removeClass("letsTry");
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
		 $('#two').addClass("letsTry");
		 $('#one').removeClass("letsTry");
		 $('#three').removeClass("letsTry");
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
		 $('#one').addClass("letsTry");
		 $('#two').removeClass("letsTry");
		 $('#three').removeClass("letsTry");
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
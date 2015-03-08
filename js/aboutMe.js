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

	var thisFunction = function(){
if ($(window).width() >750){
				var wow3 = ".wow pulse infinite";
			var wow = ".wow fadeInRight";
			var wow1 = ".wow fadeInLeft"; 
			console.log($(window).width());
			$('#first').removeClass(wow1);
			$('#second').removeClass(wow);
			$('#third').removeClass(wow1);
			$('#fourth').removeClass(wow);
			$('#first, #second, #third, #fourth').hover(function(){
				$(this).addClass(wow3);
			},function(){
				$(this).removeClass(wow3);
			})
		};
	}
	$('#projects').click(function(){
		 new WOW().init();
		 thisFunction();
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
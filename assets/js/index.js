$(document).ready(function() {
	$('.qod').slick({
		centerMode: true,
        centerPadding: '310px',
		slidesToShow: 1,
		infinite: true,
		autoplay: true,
		variableWidth: false,
		responsive: [
	    	{
				breakpoint: 1920,
				 settings: {
				   slidesToShow: 1,
				   centerMode: true,
				   centerPadding: '380px',
				   variableWidth: false
				}
		   	},
			{
		     	breakpoint: 1440,
		      	settings: {
					slidesToShow: 1,
			        centerMode: true,
			        centerPadding: '250px',
					variableWidth:false
		     	}
	    	},
	    	{
			     breakpoint: 1024,
			     settings: {
			        centerMode: true,
			        centerPadding: '140px',
			        slidesToShow: 1
			    }
	    	},
	    	{
			     breakpoint: 768,
			     settings: {
					arrows:false,
			        centerMode: true,
			        centerPadding: '0',
			        slidesToShow: 1,
					adaptiveHeight: true
			    }
	    	}
  		]
	});
});
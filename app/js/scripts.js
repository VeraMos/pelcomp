$(document).ready(function () {


   //  $('.main-slider__list').slick({
   //      prevArrow: '<button class="prev-left"></button>',
   //      nextArrow: '<button class="prev-right"></button>',
   //      dots: true
   //  });


   $('.projects-slider').slick({
   		slidesToShow: 2,
  	 	slidesToScroll: 1,
      prevArrow: '<button class="prev-left"></button>',
      nextArrow: '<button class="prev-right"></button>',
      responsive: [
    	{
	    breakpoint: 576,
	    settings: {
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    	}
   	  }
  	]

     });

   /*$(function(){
        var previousScroll = 0;
            $(window).scroll(function(event){
                var scroll = $(this).scrollTop();
                var heading = $('.banner');

                if (scroll < 35){
                    console.log('scrolling down');
                    heading.fadeIn("slow", function() {
                        heading.css('opacity', '1');
                    });
                } 
                else if (35 < scroll < 50){
                    console.log('scrolling down');
                    heading.fadeIn("slow", function() {
                        heading.css('opacity', '0.8');
                    });
                  }
                else if (50 < scroll < 70){
                    console.log('scrolling down');
                    heading.fadeIn("slow", function() {
                        heading.css('opacity', '0');
                    });
                  } 
                else {
                    heading.fadeIn("slow", function() {
                        heading.css('opacity', '1');
                    });
                }
                previousScroll = scroll;
         });
})*/

   

});

/*$(window).scroll(function(){

      $('.banner').css({'top': -$(window).scrollTop()/3});
      $('.banner').css({'opasity': -$(window).scrollTop()/3});


  });*/
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:25,
    responsiveClass:true,
	nav:false,
	dots: true,
    responsive:{
        0:{
            items:1,
       
        },
        600:{
            items:2,
          
        },
        1000:{
            items:4,
            
        }
    }
})
	$('.menu-toggle').click(function(){
		$('.main_menu').fadeToggle();
	});
	
});
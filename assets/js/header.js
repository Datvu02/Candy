$(document).ready(function(){
	 AOS.init();
	$('body').click(function() {
		$('.list').slideUp(500);
	});
	$('.language').on('click' ,function(e){
		e.stopPropagation()
		$('.language').next().slideToggle(500);
	})
	$('.currency').on('click' ,function(e){
		e.stopPropagation()
		$('.currency').next().slideToggle(500);
	})
	$('.category_title').on('click' ,function(e){
		e.stopPropagation()
		$('.category_list').slideToggle(500);
	})
	$('.Shop').on('click' ,function(e){
		e.stopPropagation()
		$('.list_shop').slideToggle(500);
		$('.list_shop').css('display','flex')
	})
	$('.preface').on('click' ,function(e){
		e.stopPropagation()
		$('.preface_list').slideToggle(500);
	})

	$('.blog').on('click' ,function(e){
		e.stopPropagation()
		$('.blog_list').slideToggle(500);
	})

	$('.page').on('click' ,function(e){
		e.stopPropagation()
		$('.list_page').slideToggle(500);
	})
	$('.bars').on('click' ,function(e){
		e.stopPropagation()
		$('.show_later').slideToggle(500);
		$('#headerFix').addClass('ative_menu');
	})
	$('.time_icon').on('click' ,function(e){
		e.stopPropagation()
		$('.show_later').slideToggle(500);
		$('#headerFix').removeClass('ative_menu');
	})
	$(".back_to_top").click(function() {
    	$("html, body").animate({scrollTop: 0}, 1000);
 	})
 	$('.slide_footer').owlCarousel({
	    loop: true,
  		nav: false,
	 	items: 1,
	  	autoplay: true,
	  	autoplayTimeout: 3000,
	  	autoplayHoverPause: true,
	  	dots: false,
	    responsive:{
	        0:{
	            items:2
	        },
	        768:{
	            items:4
	        },
	        992:{
	            items:6
	        }
	    },
	})
})
window.onscroll = function() {myFunction()};
	var header = document.getElementById("headerFix");
	var sticky = header.offsetTop;

	function myFunction() {
	    if (window.pageYOffset > sticky) {
	    	header.classList.add("sticky");
	    	$('.back_to_top').addClass('back_to_top_ative')
		} else {
	    	$('.back_to_top').removeClass('back_to_top_ative')
		    header.classList.remove("sticky");
		 	}
		}
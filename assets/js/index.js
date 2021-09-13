$(document).ready(function(){	
	$('.next_tab1').on('click',function(){
		$('.top_categories_two_content').removeClass('top_categories_two_content_ative');
		$('.top_categories_two_content').eq(0).addClass('top_categories_two_content_ative');
	})
	$('.next_tab2').on('click',function(){
		$('.top_categories_two_content').removeClass('top_categories_two_content_ative');
		$('.top_categories_two_content').eq(1).addClass('top_categories_two_content_ative');
	})
	$('.next_tab3').on('click',function(){
		$('.top_categories_two_content').removeClass('top_categories_two_content_ative');
		$('.top_categories_two_content').eq(2).addClass('top_categories_two_content_ative');
	})
	function validateEmail(email) {
    	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	return re.test(String(email).toLowerCase());
	}
	$('.subscribe_title_btn').on('click', function(){
		if ($('#email').val().length == 0) {
			$('.Format').css('display', 'none');
			$('.fill').css('display', 'block');
		} else if (validateEmail($('#email').val()) == false) {
			$('.fill').css('display', 'none');
			$('.Format').css('display', 'block');
		}else {
			$('.fill').css('display', 'none');
			$('.Format').css('display', 'none');
		}
	})
	var a = 0;
	$('.prev_icon').on('click', function(){
		if (a == 0) {
			a = 2;
			$('.client_content').removeClass('active_client')
			$('.client_content').eq(a).addClass('active_client')
		}else {
			a = a - 1;
			$('.client_content').removeClass('active_client')
			$('.client_content').eq(a).addClass('active_client')
		}
	})
	$('.next_icon').on('click', function(){
		if (a == 2) {
			a = 0;
			$('.client_content').removeClass('active_client')
			$('.client_content').eq(a).addClass('active_client')
		}else {
			a = a + 1;
			$('.client_content').removeClass('active_client')
			$('.client_content').eq(a).addClass('active_client')
		}
	})
	$('.new_product_content').owlCarousel({
	    loop: true,
  		nav: true,
	 	items: 1,
	  	autoplay: true,
	  	autoplayTimeout: 2000,
	  	autoplayHoverPause: true,
	  	dots: true,
	    responsive:{
	        0:{
	            items:1
	        },
	        768:{
	            items:2
	        },
	        992:{
	            items:3
	        }
	    },
	})
	

})
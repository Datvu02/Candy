$(document).ready(function(){
	new Splide( '#spide' ).mount();
	new Splide( '#spide', {
		type   : 'loop',
		perPage: 3,
		perMove: 1,
		dots: false,
	} ).mount();
	$('.splide_img').on('click', function(){
		var rndInt = Math.floor(Math.random() * 99) + 10
		$('#price').text(rndInt)
		$('#rootPrice').text('$'+(rndInt+10)+'.00')
		var src = $(this).attr('src');
		$('.splide__slide_show').attr('src' , src );
	})
	$(function() {

	  (function quantityProducts() {
	    var $quantityArrowMinus = $(".quantity-arrow-minus");
	    var $quantityArrowPlus = $(".quantity-arrow-plus");
	    var $quantityNum = $(".quantity-num");

	    $quantityArrowMinus.click(quantityMinus);
	    $quantityArrowPlus.click(quantityPlus);

	    function quantityMinus() {
	      if ($quantityNum.val() > 1) {
	        $quantityNum.val(+$quantityNum.val() - 1);
	      }
	    }

	    function quantityPlus() {
	      $quantityNum.val(+$quantityNum.val() + 1);
	    }
	  })();
	});
	$('.detail_tab_title1').on('click',function(){
		$('.detail_tab_title').css('border' , '0');
		$('.detail_tab_title1').css('border' , '1px solid #878787');
		$('.detail_tab_content').removeClass('detail_tab_content_ative');	
		$('.detail_tab_content').eq(0).addClass('detail_tab_content_ative');	
	})
	$('.detail_tab_title2').on('click',function(){
		$('.detail_tab_title').css('border' , '0');
		$('.detail_tab_title2').css('border' , '1px solid #878787');
		$('.detail_tab_content').removeClass('detail_tab_content_ative');	
		$('.detail_tab_content').eq(1).addClass('detail_tab_content_ative');	
	})
	$('.detail_tab_title3').on('click',function(){
		$('.detail_tab_title').css('border' , '0');
		$('.detail_tab_title3').css('border' , '1px solid #878787');
		$('.detail_tab_content').removeClass('detail_tab_content_ative');	
		$('.detail_tab_content').eq(2).addClass('detail_tab_content_ative');	
	})
	$('.new_product_content').owlCarousel({
	    loop: true,
  		nav: false,
	 	items: 1,
	  	autoplay: true,
	  	autoplayTimeout: 2000,
	  	autoplayHoverPause: true,
	  	dots: false,
	    responsive:{
	        0:{
	            items:1
	        },
	        768:{
	            items:2
	        },
	        992:{
	            items:4
	        }
	    },
	})
})

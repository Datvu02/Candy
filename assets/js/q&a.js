$(document).ready(function(){
	$('.add').on('click',function(){
		$('.add').css('display', 'block');
		$('.remove').css('display', 'none');
		$('.present').slideUp(1000);
		$(this).parent().next().slideDown(1000);
		$(this).next().css('display', 'block');
		$(this).css('display', 'none');
	})
	$('.remove').on('click',function(){
		$('.present').slideUp(1000);
		$(this).parent().next().slideUp(1000);
		$(this).prev().css('display', 'block');
		$(this).css('display', 'none');
	})
})
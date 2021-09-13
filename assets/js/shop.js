$(document).ready(function(){
	var a = 1;
	$('.click_page1').on('click', function(){
		a = 1;
		$('.page1').css('display','block');
		$('.page2').css('display','none');
	})
	$('.click_page2').on('click', function(){
		a = 2;
		$('.page1').css('display','none');
		$('.page2').css('display','block');
	})
	$('.transfer').on('click',function(){
		if (a == 1) {
			a = 2;
			$('.page1').css('display','none');
			$('.page2').css('display','block');
		}else {
			a = 1;
			$('.page1').css('display','block');
			$('.page2').css('display','none');
		}
	})
	$('.vertical').on('click', function(){
		$('.tab1').css('display','block');
		$('.tab2').css('display','none');
	})
	$('.list_arrange').on('click', function(){
		$('.tab2').css('display','block');
		$('.tab1').css('display','none');
	})
})
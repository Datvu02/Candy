$(document).ready(function(){
	function validateEmail(email) {
    	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	return re.test(String(email).toLowerCase());
	}
	$('.post_comment').on('click', function(){
		if ($('.email').val().length == 0) {
			$('.error2').eq(0).css('display', 'none');
			$('.error2').eq(1).css('display', 'block');
		} else if (validateEmail($('.email').val()) == false) {
			$('.error2').eq(1).css('display', 'none');
			$('.error2').eq(0).css('display', 'block');
		}else {
			$('.error2').css('display', 'none');
		}
		if ($('.name').val().length == 0) {
			$('.error1').eq(0).css('display', 'none');
			$('.error1').eq(1).css('display', 'block');
		}else if ($('.name').val().length < 6) {
			$('.error1').eq(1).css('display', 'none');
			$('.error1').eq(0).css('display', 'block');
		}else {
			$('.error1').css('display', 'none');
		}
	})
})
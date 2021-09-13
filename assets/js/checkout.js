$(document).ready(function(){
	function validateEmail(email) {
    	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	return re.test(String(email).toLowerCase());
	}
	$('.place').on('click', function(){
    	if ($('#sel1').val() == '0') {
    		$('#country_error').text("Please select country");
    	}else{
    		$('#country_error').text("");
    	}

    	if ($('.first_name').val().length == 0) {
    		$('#first_name_error').text("Please enter first name");
    	}else if ($('.first_name').val().length < 5){
    		$('#first_name_error').text("Please enter in full first name");
    	}else{
    		$('#first_name_error').text("");
    	}

    	if ($('.last_name').val().length == 0) {
    		$('#last_name_error').text("Please enter last name");
    	}else if ($('.last_name').val().length < 5){
    		$('#last_name_error').text("Please enter in full last name");
    	}else{
    		$('#last_name_error').text("");
    	}
    	
    	if ($('.Company_name').val().length == 0) {
    		$('#Company_name_error').text("Please enter company name");
    	}else if ($('.Company_name').val().length < 5){
    		$('#Company_name_error').text("Please enter in full company name");
    	}else{
    		$('#Company_name_error').text("");
    	}

    	if ($('#region').val() == '0') {
    		$('#region_error').text("Please select the region");
    	}else{
    		$('#region_error').text("");
    	}
    	console.log($('.Zip').val())
    	if ($('.Zip').val() == 0) {
    		$('#zip_error').text("Please enter the postal code");
    	}else{
    		$('#zip_error').text("");
    	}

    	if ($('.code1').val() == 0) {
    		$('#coupon_content_error').text("Please enter the postal code");
    	}else{
    		$('#coupon_content_error').text("");
    	}

    	if ($('.email').val().length == 0) {
    		$('#email_error').text("Please enter your email");
		} else if (validateEmail($('#email').val()) == false) {
    		$('#email_error').text("Invalid email format");
		}else {
    		$('#email_error').text("");
		}
    })
})
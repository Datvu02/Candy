$(document).ready(function(){
	jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function() {
      var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });
    });

    $('.ReceivingAddress_btn').on('click', function(){
    	if ($('#sel1').val() == '0') {
    		$('#country_error').text("Please select country");
    	}else{
    		$('#country_error').text("");
    	}
    	if ($('#sel2').val() == '0') {
    		$('#region_error').text("Please select the region");
    	}else{
    		$('#region_error').text("");
    	}
    	if ($('.code2').val().length == 0) {
    		$('#zip_error').text("Please enter the postal code");
    	}else{
    		$('#zip_error').text("");
    	}
    })
     $('.coupon_btn').on('click', function(){
     	if ($('.code1').val().length == 0) {
    		$('#coupon_content_error').text("Please enter the postal code");
    	}else{
    		$('#coupon_content_error').text("");
    	}
     })
})
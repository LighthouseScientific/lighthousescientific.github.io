// https://stackoverflow.com/questions/5614399/disabling-submit-button-until-all-fields-have-values
(function() {
    $('form :input').keyup(function() {
        var empty = false;
        $('form :input').each(function() {
            if ($(this).is(":hidden") != true) {
                if ($(this).val() == '') {
                    empty = true;
                }
					  }
        });
				if (empty) {
				    $('input[type="submit"]').attr('disabled', 'disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
				} else {
				    $('input[type="submit"]').removeAttr('disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
				}
	});
})()

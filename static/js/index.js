// For clicking/highlight the users on the left sidebar
$('.person[data-chat=person1]').addClass('active');

$('.left .person').mousedown(function () {
	if ($(this).hasClass('.active')) {
		return false;
	} else {
		var personName = $(this).find('.name').text();
		$('.left .person').removeClass('active');
		$(this).addClass('active');
	}
});



// Side Panel switch
$(".heading-compose").click(function () {
	$(".side-two").css({
		"left": "0"
	});
});

$(".newMessage-back").click(function () {
	$(".side-two").css({
		"left": "-100%"
	});
});

function rapleceTime(word) {
	return word.replace("pm", "بعد ظهر");
  };






  
function popupOpenClose(popup) {
	
	/* Add div inside popup for layout if one doesn't exist */
	if ($(".wrapper").length == 0){
		$(popup).wrapInner("<div class='wrapper'></div>");
	}
	
	/* Open popup */
	$(popup).show();

	/* Close popup if user clicks on background */
	$(popup).click(function(e) {
		if ( e.target == this ) {
			if ($(popup).is(':visible')) {
				$(popup).hide();
			}
		}
	});

	/* Close popup and remove errors if user clicks on cancel or close buttons */
	$(popup).find("button[name=close]").on("click", function() {
		if ($(".formElementError").is(':visible')) {
			$(".formElementError").remove();
		}
		$(popup).hide();
	});
}

$(document).ready(function () {
	$("[data-js=open]").on("click", function() {
		popupOpenClose($(".popup"));
	});
});
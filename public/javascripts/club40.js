var List = {
   
  setup: function() {

	$('form').die().live('submit', function(e) {
	  var name  = $.trim($('.user_name').val())
	  var wish = $.trim($('.user_wish').val())
	  if( name.length > 0 && wish.length > 0 && name.toLowerCase() != "Name".toLowerCase() && wish.toLowerCase() != "Wish".toLowerCase()) {
	  } else {
		alert("Please fill out both fields.")
		return false;
	  }
	})
	
	$("input[type=text]").each( function() {
	  var elem = $(this)
	  elem.click( function () {
		elem.val("");
		elem.unbind("click");
	  })
	  elem.focus( function () {
		elem.val("");
		elem.unbind("focus");
	  })
	})
	
	$("textarea").each( function() {
	  var elem = $(this)
	  elem.click( function () {
		elem.val("");
		elem.unbind("click");
	  })
	  elem.focus( function () {
		elem.val("");
		elem.unbind("focus");
	  })
	})
		
  }
}

List.setup();
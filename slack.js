$(".abc").click(function() {
  // alert( "Handler for .click() called." );
  	
  var payload ={
      "text": "Hello",
      "username" : "Dashboard"
      // "channel": "@username"
      // "channel": "#other-channel",
      // "icon_url": "https://slack.com/img/icons/app-57.png"


    };

  function slack () {
		return JSON.stringify(payload);
	}

	$.ajax({
       url: 'https://hooks.slack.com/services/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',
       type: 'POST',
       processData: true,
       data : slack() ,
       success : function() {
         alert ("Messsage Posted");
     		},
     	error: function(){
         alert("Messsage not posted")
      		}

    	});


});
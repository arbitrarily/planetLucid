// All scripts

$(document).ready(function() {
	
	//Prevent Fake Browser Navigation
	var naviLink = $('.page-transition');
	naviLink.click(function(event){
			event.preventDefault();
	});

	//Thumbs grid init
	Grid.init();

	//Ajax Form
	$('#submit').click(function(){
		sprytextfield1.validate();
		sprytextfield2.validate();
		sprytextarea1.validate();
		$.post("form.php", $("#feedback-form").serialize(),  function(data) {
			$('#success').html(data).animate({opacity: 1}, 500, function(){
				$("#feedback-form").trigger( 'reset' );
			});
		});
		return false;
	});

    // Nav fade in links
    $(".nav a").click(function(event) {
        event.preventDefault();
        $(".subMenu").hide();
        var relativeID = $(this).attr('href');

        $("" + relativeID).fadeToggle("slow","linear"); 
    });

    // Nav fixed fade in links
    $(".container.navigation li a").click(function(event) {
        event.preventDefault();
        $(".subMenu").fadeOut("fast","linear");
        var relativeID = $(this).attr('href');

        $("" + relativeID).fadeToggle("slow","linear"); 
    });

    //Sticky Nav
    $(window).scroll(function(){
        if ($(this).scrollTop() > 160) { 
			$(".navFixed").animate({"top": "0"}, 100);
        } else {
            $(".navFixed").animate({"top": "-300px"}, 100);
        }
        if ($(this).scrollTop() < 100) { 
            $(".navFixed").animate({"top": "-300px"}, 200);
        }
    });

});


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

    // Aobe hexagon fade in links
    $(".container.navigation a").click(function(event) {
        event.preventDefault();
        $(".navigation .subMenu").hide();
        var relativeID = $(this).attr('href');
        $(".hexagon h2").toggleClass('rotated');

        $("" + relativeID).fadeToggle("slow","linear"); 
    });

    // Nav fixed fade in links
    $(".navFixed .navCategories li a").click(function(event) {
        event.preventDefault();
        $(".navFixed .navCategories .subMenu").hide();
        var relativeID = $(this).attr('href');

        $("" + relativeID).fadeToggle("slow","linear");
    });

    //Sticky Nav
    $('.pt-page').bind("scroll", function() {
        if ($('.pt-page').scrollTop() > 280) {
            $(".navFixed").stop(true, false).animate({top: "0px"}, 300);
        }
        else {
            $(".navFixed").stop(true, false).animate({top: "-300px"}, 400);
        }
    });

});
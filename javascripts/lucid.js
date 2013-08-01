$(function() {
    // slideshow
    $('#slides, #slides2').slidesjs({
        width: 587,
        height: 373,
        navigation: {
            active: true,
        },
        pagination: { active: false },
        effect: { fade: { speed: 400  } }
    });
    $(".content.panel.twelve.columns").hide();

    // nav fade in links
    $(".nav a").click(function(event) {
        event.preventDefault();
        $(".subMenu").hide();
        var relativeID = $(this).attr('href');

        $("" + relativeID).fadeToggle("slow","linear"); 
    });

        // nav fixed fade in links
    $(".navFixed a").click(function(event) {
        event.preventDefault();
        $(".subMenuFixed").hide();
        var relativeID = $(this).attr('href');

        $("" + relativeID).fadeToggle("slow","linear"); 
    });

    //large preview
    $(".mainBody .three.columns a").click(function(event) {
        event.preventDefault();
        var relativeID = $(this).attr('href');

        $(".content.panel.twelve.columns").animate({ opacity: 0 }, { queue: false, duration: '150' } ).delay("300").slideUp("250","linear", function() {
            $("" + relativeID).slideDown("350", "linear").delay("250").animate({ opacity: 100 }, { queue: false, duration: '200' } );
        });
    });

    //sticky nav
    $(window).scroll(function(){
        if ($(this).scrollTop() > 160) { 
            $(".nav ul").fadeOut(100);
            $(".navFixed").css('width',$('.mainBody').width() + 1).animate({"top": "0"}, 200);
        } else {
            $(".navFixed").animate({"top": "-80px"}, 100);
        }
        if ($(this).scrollTop() < 100) { 
            $(".navFixed").removeAttr("width").animate({"top": "-80px"}, 200);
            $(".nav ul").fadeIn(100);
        }
    });

    // close large preview
    $(".closePreview").click(function() {
        $(".content.panel.twelve.columns").animate({ opacity: 0 }, { queue: false, duration: '150' } ).slideUp("450","linear");
    });

});
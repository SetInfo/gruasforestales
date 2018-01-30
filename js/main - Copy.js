(function($) {
    'use strict';



	


 			    /*=======================================
        Single Product
    =======================================*/
    $('.single-thumbnail-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.single-thumbnail-small'
    });
    $('.single-thumbnail-small').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.single-thumbnail-big',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        arrows: true,
        prevArrow: '<button type="button" class="custom-prev"><i class="fa fa-long-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="custom-next"><i class="fa fa-long-arrow-right"></i></button>'
    });

    /* =======================================
        For Menu
    =======================================*/
    $("#navigation").menumaker({
        title: "",
        format: "multitoggle"
    });
	
	    /*=======================================
          Achieve Count
    ======================================= */
    function count($this) {
        var current = parseInt($this.html(), 10);
        current = current + 1; /* Where 50 is increment */
        $this.html(++current);
        if (current > $this.data('count')) {
            $this.html($this.data('count'));
        } else {
            setTimeout(function() {
                count($this)
            }, 50);
        }
    }
    $(".stat-count").each(function() {
        $(this).data('count', parseInt($(this).html(), 10));
        $(this).html('0');
        count($(this));
    });
	
		    /* =======================================
           Testimonial Section 
       =======================================*/
    $("#testimonial").owlCarousel({
        autoPlay: 5000, //Set AutoPlay to 5 seconds
        autoplay: true,
        smartSpeed: 2000, // Default is 250
        items: 1, //Set Testimonial items
        loop: true,
        margin: 10,
        singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: true,
        nav: false,
        dots: false,
    });
	
    /* =======================================
           Team Section 
       =======================================*/
    $("#team").owlCarousel({
        items: 4, //Set Testimonial items
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000, // Default is 5000
        smartSpeed: 1000, // Default is 250
        singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: true,
        nav: true,
        dots: false,
        navText: ['<i class="arrow_carrot-left"></i>', '<i class="arrow_carrot-right"></i>'],
        responsive: {
            1200: {
                items: 4
            },
            992: {
                items: 3
            },
            768: {
                items: 3
            },
            480: {
                items: 2
            },
            320: {
                items: 1
            },
            280: {
                items: 1
            }
        }
    });    
	
	/* =======================================
          offer Section 
       =======================================*/
    $("#whoffer").owlCarousel({
        items: 3, //Set Testimonial items
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000, // Default is 5000
        smartSpeed: 1000, // Default is 250
        singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: true,
        nav: true,
        dots: false,
        navText: ['<i class="arrow_carrot-left"></i>', '<i class="arrow_carrot-right"></i>'],
        responsive: {
            1200: {
                items: 3
            },
            992: {
                items: 3
            },
            768: {
                items: 3
            },
            480: {
                items: 2
            },
            320: {
                items: 1
            },
            280: {
                items: 1
            }
        }
    });

	
	    /* =======================================
         Related Product Section  
    =======================================*/
    $("#apps-screenshot").owlCarousel({
        items: 4, //Set Testimonial items
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000, // Default is 5000
        smartSpeed: 1000, // Default is 250
        touchDrag: true,
        mouseDrag: true,
        pagination: false,
        nav: false,
        dots: false,
		        responsive: {
            1200: {
                items: 4
            },
            992: {
                items: 3
            },
            768: {
                items: 3
            },
            480: {
                items: 2
            },
            320: {
                items: 1
            },
            280: {
                items: 1
            }
        }
    });
	

	    /* =======================================
         cart plus minus button
    ======================================*/
    $(".cart-plus-minus").append('<div class="dec qtybutton">-</i></div><div class="inc qtybutton">+</div>');

    $(".qtybutton").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find("input").val(newVal);
    });
	
	

    /* =======================================
           parallax background 
       =======================================*/
	   $('.confacts-section').parallax("50%", 0.6);
	   $('#video').parallax("20%", 0.4);
	   
/*=======================================
    Parallax Slider
=======================================*/
   // Pretty simple huh
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);
  


    /*=======================================
             Header Section
        ========================================== */
    $(document).ready(function() {
        $(".search_icon").on('click', function() {
            $(".search_icon_inr").slideToggle();
        });
        $(".shop_setting").on('click', function() {
            $(".shop_setting_inr").slideToggle();
        });
    });







    /* =======================================
    		WOW ANIMATION
    ======================================= */
    var wow = new WOW({
        mobile: false
    });
    wow.init();


    /*=======================================
        Scroll Top
    =======================================*/
    $(".scrollup").on('click', function() {
        $('html,body').animate({
            'scrollTop': '0'
        }, 4000);
        return false;
    });





})(jQuery);
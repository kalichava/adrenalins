$(document).ready(function() {

    /* SCROLL TO ANCHOR */
    var jump = function(e) {
        if (e) {
            //e.preventDefault();
            var target = jQuery(this).attr("href").replace('/', '');
        } else {
            var target = location.hash;
        }

        jQuery('html,body').animate({
            scrollTop: (jQuery(target).offset().top)
        }, 500, function() {
            //location.hash = target;
        });
    };

    $(document).on('click', 'a[href*=#]', jump);
    if (location.hash) {
        setTimeout(function() {
            $('html, body').scrollTop(0).show();
            jump();
        }, 0);
    } else {
        $('html, body').show();
    }
    /* end SCROLL TO ANCHOR */



    /* DROPDOWN FOR MOBILE SCREENS */
    $("<select />").appendTo("nav.main-menu");
    $("<option />", {
        "selected": "selected",
        "value": "",
        "text": "Go to..."
    }).appendTo("nav select");
    $("nav.main-menu a").each(function() {
        var el = $(this);
        $("<option />", {
            "value": el.attr("href"),
            "text": el.text()
        }).appendTo("nav.main-menu select");
    });
    $("nav.main-menu select").change(function() {
        window.location = $(this).find("option:selected").val();
    });
    /* end DROPDOWN FOR MOBILE SCREENS */



    /* PHOTOS */
    $('.photogallery-list a img, .slides-menu-item a img, .news-thumbnail img').resizeToParent();


    $('.article-image-link').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom',
        zoom: {
            enabled: true,
            duration: 300,
            easing: 'ease-in-out',
            opener: function(openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });


    $('.photogallery-list').each(function() {
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
            mainClass: 'mfp-fade',
            tLoading: '',
            removalDelay: 300,
            showCloseBtn: false,
            gallery: {
                enabled: true,
                preload: [1, 2]
            }
        });
    });

    /* end PHOTOS */



    /* SMS HELPER (SCHOOL PAGE) */
    $('.sms-section').hide();
    $('#sms-tabs a').bind('click', function(e) {
        $('#sms-tabs a.current').removeClass('current');
        $('.sms-section:visible').hide();
        $(this.hash).show();
        $(this).addClass('current');
        e.preventDefault();
    });

    /* end SMS HELPER (SCHOOL PAGE) */



    /* FORM CHOOSER (CLUB PAGE) */
    $('.forms-container').css({
        'left': '-100%',
        'height': '260px'
    });
    $('.email-form-link').click(function() {
        $('.forms-container').animate({
            'left': '0%'
        });
        $('.promo-form.club').animate({
            'height': '250px'
        });
    });
    $('.sms-form-link').click(function() {
        $('.forms-container').animate({
            'left': '-200%'
        });
        $('.promo-form.club').animate({
            'height': '250px'
        });
    });
    $('.promo-form .back').click(function() {
        $('.forms-container').animate({
            'left': '-100%'
        });
        $('.promo-form.club').animate({
            'height': '260px'
        });
    });
    /* end FORM CHOOSER (CLUB PAGE) */


    /* ELEMENT LINKING (USER CONTENT PAGES) */
    $('.attach').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        removalDelay: 300,
        mainClass: 'mfp-fade',
        focus: '#focus-it'
    });
    /* end ELEMENT LINKING (USER CONTENT PAGES) */


    /* MISC */
    $(".sticky").sticky({getWidthFrom: '.left-narrow-column', topSpacing: 0, bottomSpacing: 100});
    $(window).on('resize', function() {
        $('.sticky').css('width', $('.sticky').parent().css('width'));
    });

    Placeholdem(document.querySelectorAll('[placeholder]'));

    $("#newCommentField").keypress(function() {
        $('#publishButton').addClass('active');
    });
    /* end MISC */


    /* FAQ */
    $('.faq-container .answer').hide();
    $('.faq-container .question').click(function() {
        $(this).parent().toggleClass('opened');
        $(this).next().slideToggle('300');
    });
    /* end FAQ */


    /* SEARCH */
    $('.search-link').click(function() {
        $('.panel').toggleClass('flip');
        $(this).toggleClass('flip');
    });
    /* end SEARCH */
});


/* FACEBOOK */
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id))
        return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=630551813674684&version=v2.0";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
/* end FACEBOOK */



/* MAGNIFIC POPUP */
/*
$.extend(true, $.magnificPopup.defaults, {
    tClose: 'Close (Esc)', // Alt text on close button
    tLoading: '', // Text that is displayed during loading. Can contain %curr% and %total% keys
    gallery: {
        tPrev: 'Previous (Left arrow key)', // Alt text on left arrow
        tNext: 'Next (Right arrow key)', // Alt text on right arrow
        tCounter: '%curr% of %total%' // Markup for "1 of 7" counter
    },
    image: {
        tError: '<a href="%url%">The image</a> could not be loaded.' // Error message when image could not be loaded
    },
    ajax: {
        tError: '<a href="%url%">The content</a> could not be loaded.' // Error message when ajax request failed
    }
});
*/
/* end MAGNIFIC POPUP */
$(document).ready(function() {
    $('.user-menu-link').qtip({
        style: {
            def: false,
            classes: 'qtip-light user-menu'
        },
        content: {
            text: $('#user-menu')
        },
        position: {
            my: 'top right',
            at: 'bottom right'
        },
        show: {
            effect: function(offset) {
                $(this).fadeIn(300);
            }
        },
        hide: {
            fixed: true,
            event: 'unfocus',
            effect: function(offset) {
                $(this).fadeOut(300);
            }
        }

    });
    $('.pilot-login-link').qtip({
        style: {
            def: false,
            classes: 'qtip-light pilot-login'
        },
        content: {
            text: $('#pilot-login')
        },
        position: {
            my: 'top right',
            at: 'bottom right',
            adjust: {
                x: 0,
                y: -30
            }
        },
        show: {
            solo: true,
            effect: function(offset) {
                $(this).fadeIn(300);
            }
        },
        hide: {
            fixed: true,
            event: 'unfocus',
            effect: function(offset) {
                $(this).fadeOut(300);
            }
        }
    });
    $('[title!=""]').qtip({
        style: {
            classes: 'qtip-light'
        },
        position: {
            my: 'bottom center',
            at: 'top center'
        },
        show: {
            effect: function(offset) {
                $(this).fadeIn(200);
            }
        }
    });
    $('.calendar .active').each(function() {
        $(this).qtip({
            content: {
                text: $(this).find('div.hidden')
            },
            position: {
                at: 'top left',
                adjust: {
                    x: 20,
                    y: 20
                }
            },
            style: {
                classes: 'qtip-light qtip-custom'
            },
            show: {
                solo: true,
                effect: function(offset) {
                    $(this).fadeIn(200);
                }
            },
            hide: {
                event: 'unfocus'
            }
        });
    });
});

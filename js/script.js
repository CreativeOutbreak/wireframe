$.hisrc.speedTest();
function init() {
    $('.ni_tabs').ni_tabs();
    $('.ni_drop').ni_dropdown({addGlyphicon: [true, ['glyphicon-plus','glyphicon-minus', 'ni_float-right'], '<span>']});
    $('.ni_menu').ni_menu();
    dbug('loaded');
    $('.ni_rwd-img').hisrc();
    Resize();
    window.onresize = function(event) {
        Resize();
    };
}



function ReturnSize() {
    var myWidth = 0, myHeight = 0;
    if( typeof( window.innerWidth ) == 'number' ) {
        //Non-IE
        myWidth = window.innerWidth;
        myHeight = window.innerHeight;
    } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
        //IE 6+ in 'standards compliant mode'
        myWidth = document.documentElement.clientWidth;
        myHeight = document.documentElement.clientHeight;
    } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
        //IE 4 compatible
        myWidth = document.body.clientWidth;
        myHeight = document.body.clientHeight;
    }
    return [myWidth, myHeight];
}


function Resize() {
    var size = ReturnSize();
    var height = size[1];
    var top = parseInt($('.ni_navbar-menu').css('top').replace('px',''));
    var newHeight = height - top;
    $('.ni_navbar-menu, .ni_navbar-login').css('height',newHeight);
    var theight = $('#ni_menu-tab').outerHeight();
    $('.tab-content').height(newHeight - theight);
}

$.breakpoint((function () {
    var element;

    return {
        condition: function () {
            return window.matchMedia('only screen and (min-width : 320px) and (max-width : 480px)').matches;
        },
first_enter: function () {
    // Create element.
    element = $('<a>');
},
enter: function () {
    // Append element to DOM when condition is true.
    $('body').append(element);
},
exit: function () {
    // Detach element when condition is false.
    element.detach();
}
}
}()));

$.breakpoint((function () {
    var element;

    return {
        condition: function () {
            return window.matchMedia('only screen and (min-width:500px)').matches;
        },
    first_enter: function () {
        // Create element.
        element = $('<span>');
    },
    enter: function () {
        // Append element to DOM when condition is true.
        $('body').append(element);
    },
    exit: function () {
        // Detach element when condition is false.
        element.detach();
    }
    }
}()));

$(init);

(function ( $ ) {
    var ni_menulist = new Array();
    $.fn.ni_menu = function( options ) {
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            css_out: "ni_menu-out",
            duration: 300,
            easing: "easeOutSine",
        }, options );

        return this.each(function(i) {
            ni_menulist[i] = $('*[data-ni_menu]', this);
            ni_menulist[i].each(function() {
                var $t = $(this);
                var t = $t.data('ni_target');
                var css_out = $t.attr('data-ni_css-out') ? $t.attr('data-ni_css-out') : settings.css_out;
                $(t).addClass(css_out);
                $t.on('click', ni_menuSlide);
                $t.data('ni_i-num',i);
                $t.data('ni_settings',settings);
            });
            // Do something to each element here.
        });
    };

    function ni_menuSlide(e) {
        var $t = $(e.target);
        var t = $t.data('ni_target');
        var s = $t.data('ni_settings');
        var i = $t.data('ni_i-num');
        ni_menulist[i].each(function(){
            var $tt = $(this);
            var tt = $tt.data('ni_target');
            var css_out = $tt.attr('data-ni_css-out') ? $tt.attr('data-ni_css-out') : s.css_out;
            var d = $tt.attr('data-ni_duration') ? parseInt($tt.attr('data-ni_duration')) : s.duration;
            var easing = $tt.attr('data-ni_easing') ? $tt.attr('data-ni_easing') : s.easing;
            if(t != tt) {
                if(!$(tt).hasClass(css_out)) $(tt).addClass(css_out, d, easing );
            } else {
                $(tt).toggleClass(css_out, d, easing );
            }
        });  
        return false;   
    }
}( jQuery ));


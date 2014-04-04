(function ( $ ) {
    var ni_tablist = new Array();
    $.fn.ni_menu = function( options ) {
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            data: "ni_tab-tog",
        }, options );

        return this.each(function(i) {
            ni_tablist[i] = $('*[data-ni_menu]', this);
            ni_tablist[i].each(function() {
                var $t = $(this);
                var t = $t.data('ni_target');
               // dbug(fx === "slide");
                       $(t).addClass('ni_menu-out');
                        //$(t).css(m[1], '110%');
                        $t.on('click', ni_menuSlide);
                   //$(this).on('click', ni_tabClick);
                //$(this).data('ni_tab-num',i);
            });
            // Do something to each element here.
        });
    };

    function ni_menuSlide(e) {
        var $t = $(e.target);
        var t = $t.data('ni_target');
        var d = $t.data('ni_menu').split(',');
        var $m = $(t);
        /*var c = d[1];
        var p = $m.css(c);
        var s = $m.data('ni_start');
        dbug("p: "+p+" s: "+s);
        if(p === s) {
            var j = c === 'left' ? {left : "110%"} : {right : "110%"};
            $m.animate(j);
        }
        else {
            dbug(c+' : '+s);
            var j = c === 'left' ? {left : s} : {right : s};
            $m.animate(j);
        }*/
        $m.toggleClass('ni_menu-out', 300, "easeOutSine" );
        return false;   
    }
}( jQuery ));


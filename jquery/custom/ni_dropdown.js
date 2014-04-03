(function ( $ ) {
    $.fn.ni_dropdown = function( options ) {
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            addGlyphicon: [true, ['glyphicon-plus','glyphicon-minus', 'ni_float-right'], '<span>'],
            displayClass: [false],
            hideClass: [false],
            toggleDisplay: [true, 0.5],
            diplayFunction: [true, 'show', 0.5],
            hideFunction: [true, 'hide', 0.5], 
        }, options );

        return this.each(function() {
            $t = $( this );
            $a = $('> a',this);
            $a.data('ni_dropdown-settings', settings);
            if($t.has( "ul" ).length) { 
                
                if(settings.addGlyphicon[0]) {
                    var el = $(settings.addGlyphicon[2]).addClass("glyphicon "+settings.addGlyphicon[1][0]+" "+settings.addGlyphicon[1][2]);
                    $('> a', this).append(el);
                }
                
                var $ul = $('ul', this);
                if(settings.hideClass[0]) { 
                    $ul.addClass(settings.hideClass[1]);
                    console.log(settings.hideClass[0]);
                }
                else {
                    console.log('rereer');
                    $ul.hide();
                }
                
                $a.on('click', ni_dropClick);
            }
        });
    };

    function ni_dropClick(e) {
        var $t = $(e.target);
        var $p = $t.parent();
        var s = $t.data('ni_dropdown-settings');
        console.log(s);
        if(s.toggleDisplay[0]) {
            var y = $('ul', $p).toggle();
            if(y[0].clientHeight === 0) {
                $('.'+s.addGlyphicon[1][1], $p).removeClass(s.addGlyphicon[1][1]).addClass(s.addGlyphicon[1][0]);
            }
            else {
                $('.'+s.addGlyphicon[1][0], $p).removeClass(s.addGlyphicon[1][0]).addClass(s.addGlyphicon[1][1]);
            }   
        } 
        return false;   
    }
}( jQuery ));


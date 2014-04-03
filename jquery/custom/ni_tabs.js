(function ( $ ) {
    var ni_tablist = new Array();
    $.fn.ni_tabs = function( options ) {
        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            data: "ni_tab-tog",
        }, options );

        return this.each(function(i) {
            console.log(settings.data);
            ni_tablist[i] = $('*[data-ni_tab="true"]', this);
            ni_tablist[i].each(function() {
                $(this).on('click', ni_tabClick);
                $(this).data('ni_tab-num',i);
            });
            // Do something to each element here.
        });
    };

    function ni_tabClick(e) {
        var $this = $(e.target);
        var tn = $this.data('ni_tab-num');
        ni_tablist[tn].each(function() {
            var $t = $(this);
            $t.parent().removeClass('active');
            $($t.data('ni_tab-id')).removeClass('active');
        });
        $this.parent().addClass('active');
        $($this.data('ni_tab-id')).addClass('active');
        return false;   
    }
}( jQuery ));


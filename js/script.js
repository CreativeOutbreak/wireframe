function init() {
    $('.ni_tabs').ni_tabs();
    $('.ni_drop').ni_dropdown({addGlyphicon: [true, ['glyphicon-plus','glyphicon-minus', 'ni_float-right'], '<span>']});
    console.log('loaded');
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

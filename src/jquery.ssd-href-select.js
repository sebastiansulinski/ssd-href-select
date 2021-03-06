/*
 * ssdHrefSelect jQuery plugin
 * Examples and documentation at: https://github.com/sebastiansulinski/ssd-href-select
 * Copyright (c) 2015 Sebastian Sulinski
 * Version: 1.1.1 (20-OCT-2015)
 * Licensed under the MIT.
 * Requires: jQuery v1.9 or later
 */
(function(window, $) {

    $.fn.ssdHrefSelect = function(options) {

        "use strict";

        var settings = $.extend({
            dataHref : 'href'
        }, options);


        function isEmpty(value) {

            "use strict";

            return (
                typeof value === 'undefined' ||
                value === '' ||
                value === false ||
                value.length < 1
            );

        }

        return this.each(function() {

            "use strict";

            $(this).on('change', 'select', function() {

                var href = $(this).data(settings.dataHref),
                    val = ! isEmpty(href) ? href : $(this).val();

                if ( ! val) {
                    return false;
                }

                window.location.href = val;

            });

        });

    }

})(window, jQuery);

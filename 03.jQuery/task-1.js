function solve() {
    return function (selector, count) {
        function isNumber(n) {
            return typeof (n) != "boolean" && !isNaN(n);
        }

        if (typeof (selector) !== 'string') {
            throw 'invalid selector';
        }
        if (count < 1) {
            throw '';
        }
        if (!count) {
            throw '';
        }
        if (!isNumber(count)) {
            throw '';
        }

        var $element = $(selector),
            $ul = $('<ul />')
                .addClass('items-list');

        for (var i = 0; i < count; i += 1) {
            var $li = $('<li />')
                .addClass('list-item')
                .text('List item #' + i);

            $($li).appendTo($ul);
        }
        $ul.appendTo($element);
    };
}

module.exports = solve;
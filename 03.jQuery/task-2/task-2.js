function solve() {
    return function (selector) {
        if (selector === undefined) {
            throw '';
        }
        if (typeof selector !== 'string') {
            throw '';
        }
        if (!$(selector).size()) {
            throw '';
        }

        var $element = $(selector);

        var $listOfButtons = $('.button, .content');

        $element.find('.button')
            .text('hide');

        $('.button').on('click', function () {
            var $this = $(this);
            var $node = $this;

            var $nextEl = $node
                .nextUntil('.button')
                .filter('.content')
                .first();

            if ($nextEl.length === 0) {
                return;
            }

            if ($nextEl.css('display') === 'none') {
                $node.text('hide');
                $nextEl.css('display', '');

            } else {
                $node.text('show');
                $nextEl.css('display', 'none');
            }
        });
    };
}

module.exports = solve;
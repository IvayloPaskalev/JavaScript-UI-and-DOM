function solve() {
    $.fn.datepicker = function () {
        var $inputDatepicker = $(this);
        var $datePickerWrapper = $inputDatepicker.parent();
        $datePickerWrapper.addClass('datepicker-wrapper');
        $inputDatepicker.addClass('datepicker');

        
    };
}

if(typeof module !== 'undefined') {
    module.exports = solve;
}
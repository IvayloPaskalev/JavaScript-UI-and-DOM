function solve() {
    return function (element) {
        var elem;
        if (typeof element !== 'string' && !(element instanceof HTMLElement)) {
            throw '';
        }
        if (typeof element === 'string') {
            elem = document.getElementById(element);
        }
        if (element instanceof HTMLElement) {
            elem = element;
        }

        var listOfButtons = elem.getElementsByClassName('button');
        var listOfButtonsLength = listOfButtons.length;

        for (var i = 0; i < listOfButtonsLength; i++) {
            var currentButton = listOfButtons[i];
            currentButton.innerHTML = "hide";
        }

        elem.addEventListener('click', function (ev) {
            var cont = ev.target.nextElementSibling;
            if (ev.target.className === 'button') {
                 if (cont.tagName === 'BR') {
                cont = cont.nextElementSibling;
                }
                if (cont.className === 'content') {
                    if (cont.style.display === '') {
                        cont.style.display = 'none';
                        ev.target.innerHTML = 'show';
                        return;
                    }
                    if (cont.style.display === 'none') {
                        cont.style.display = '';
                        ev.target.innerHTML = 'hide';
                        return;
                    }
                }
            }
        }, false);
    };
}
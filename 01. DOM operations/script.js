function solve() {
   return function (element, contents) {
        var elementExist = document.getElementById(element);
        var fragment = document.createDocumentFragment();
        var len = contents.length;
        var elem;

        if ((typeof element !== 'string') && !(element instanceof HTMLElement)) {
            throw '';
        } else {
            if (typeof element === 'string') {
                if (elementExist) {
                    elem = elementExist;
                } else {
                    throw '';
                }
            } else if (element instanceof HTMLElement) {
                elem = element;
            } else {
                throw '';
            }
        }

        if (!contents || contents.some(function (contElement) {
            return typeof contElement !== 'string' && typeof contElement !== 'number';
        })) {
            throw Error('no');
        }

        for (var i = 0; i < len; i++) {
            var div = document.createElement('div');
            div.innerHTML = contents[i];
            var clone = div.cloneNode(div);
            fragment.appendChild(clone);
        }
     
        elem.innerHTML = '';
        elem.appendChild(fragment);
    }
}

// ES6 solution
/*
function solve() {
    return function(element, contents) {
        if (typeof element === 'string') {
            element = document.getElementById(element);
            if (!element) {
                throw new Error();
            }
        } else {
            element = element;
        }

        contents.forEach(x => {
            if (typeof x !== 'number' && typeof x !== 'string') {
                throw new Error();
            }
        })

        element.innerHTML = '';
        let div = document.createElement('div');
        let newDiv;
        let docFragment = document.createDocumentFragment();

        contents.forEach(x => {
            newDiv = div.cloneNode(true);
            newDiv.innerHTML = x;
            docFragment.appendChild(newDiv);
        })
        element.appendChild(docFragment);
    };
};
*/

function solve() {
  return function (selector, isCaseSensitive) {
    var elem = document.querySelector(selector);
    elem.className = 'items-control';

    var divAdd = document.createElement('div');
    divAdd.className = 'add-controls';
    divAdd.innerHTML = 'Enter text';

    var inputAdd = document.createElement('input');

    var btnAdd = document.createElement('button');
    btnAdd.className = 'button';
    btnAdd.innerHTML = 'Add';

    var divSearch = document.createElement('div');
    divSearch.className = 'search-controls';
    divSearch.innerHTML = 'Search';

    var inputSearch = document.createElement('input');

    divSearch.appendChild(inputSearch);

    var divResult = document.createElement('div');
    divResult.className = 'result-controls';

    var ulAdd = document.createElement('ul');
    ulAdd.classList = 'list-item';

    btnAdd.addEventListener("click", function () {
      var liAdd = document.createElement('li');
      liAdd.className = 'list-item';
      var btn = document.createElement('button');
      btn.className = 'button';
      btn.innerHTML = 'X';
      liAdd.innerHTML = inputAdd.value;
      ulAdd.appendChild(btn);
      ulAdd.appendChild(liAdd);
      btn.addEventListener('click', function () {
        ulAdd.removeChild(btn);
        ulAdd.removeChild(liAdd);
      }, false);
    }, false);
    divAdd.appendChild(inputAdd);
    divAdd.appendChild(btnAdd);
    divResult.appendChild(ulAdd);
    elem.appendChild(divAdd);
    elem.appendChild(divSearch);
    elem.appendChild(divResult);
  };
}

//module.exports = solve;
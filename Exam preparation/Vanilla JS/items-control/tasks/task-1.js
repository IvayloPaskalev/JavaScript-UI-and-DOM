function solve() {
  return function (selector, isCaseSensitive) {
    isCaseSensitive = isCaseSensitive || false;
    var element = document.querySelector(selector);
    element.className = 'items-control';

    var fragment = document.createDocumentFragment();

    //ADD CONTROLS 
    var labelAdd = document.createElement('label');
    labelAdd.className = 'add-controls';
    labelAdd.innerHTML = 'Enter text';
    var inputAdd = document.createElement('input');
    var btnAdd = document.createElement('button');
    btnAdd.className = 'button';
    btnAdd.innerHTML = 'Add';
    var ulResult = document.createElement('ul');
    ulResult.className = 'items-list';
    var liResult = document.createElement('li');
    liResult.className = 'list-item';
    var btnResult = document.createElement('button');
    btnResult.className = 'button';
    btnResult.innerHTML = 'X';
    var textLiResult = document.createElement('span');

    labelAdd.addEventListener('click', function (ev) {
      var target = ev.target;
      if (target.tagName === 'BUTTON') {
        var text = target.previousElementSibling.value;
        var newLiItem = liResult.cloneNode(true);
        var newBtn = btnResult.cloneNode(true);
        var newSpan = textLiResult.cloneNode(true);
        newSpan.innerHTML = text;
        newLiItem.appendChild(newBtn);
        newLiItem.appendChild(newSpan);
        ulResult.appendChild(newLiItem);
      }
    }, false);

    // SEARCH CONTROLS
    var labelSearch = document.createElement('label');
    labelSearch.className = 'search-controls';
    labelSearch.innerHTML = 'Search';
    var inputSearch = document.createElement('input');

    labelSearch.addEventListener('input', function (ev) {
      var text = ev.target.value;

      var liChildren = ulResult.getElementsByTagName('li');
      for (var i = 0, len = liChildren.length; i < len; i += 1) {
        var currentLi = liChildren[i];
        var header = currentLi.lastElementChild.innerHTML.trim();
        if (isCaseSensitive) {
          if (header.indexOf(text) >= 0) {
            currentLi.style.display = '';
          } else {
            currentLi.style.display = 'none';
          }
        } else {
          if (header.toLowerCase().indexOf(text.toLowerCase()) >= 0) {
            currentLi.style.display = '';
          }
          else {
            currentLi.style.display = 'none';
          }
        }
        console.log(2);
      }
    }, false);

    // RESULT CONTROLS
    var labelResult = document.createElement('label');
    labelResult.className = 'result-controls';

    ulResult.addEventListener('click', function (ev) {
      var target = ev.target;
      if (target.tagName === 'BUTTON') {
        if (target.parentNode.className === 'list-item') {
          target.parentNode.outerHTML = '';
        }
      }
    }, false);

    labelAdd.appendChild(inputAdd);
    labelAdd.appendChild(btnAdd);
    labelResult.appendChild(ulResult);
    labelSearch.appendChild(inputSearch);

    fragment.appendChild(labelAdd);
    fragment.appendChild(labelSearch);
    fragment.appendChild(labelResult);

    element.appendChild(fragment);
  };
}

module.exports = solve;
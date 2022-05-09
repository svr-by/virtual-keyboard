export function buildElement(tagElem, classElem, parentElem, innerText = '') {
  let elem = document.createElement(tagElem);
  elem.classList.add(classElem);
  elem.innerText = innerText;
  parentElem.appendChild(elem);
  return elem;
}

export function buildPage() {
  const MAIN = buildElement('main', 'main', document.body);
  return buildElement('div', 'wrapper', MAIN);
}

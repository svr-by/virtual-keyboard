export function createHTML(tagHTML, classHTML, parentHTML, innerText = '') {
  let elem = document.createElement(tagHTML);
  elem.classList.add(classHTML);
  elem.innerText = innerText;
  parentHTML.appendChild(elem);
  return elem;
}

export function createPage() {
  const MAIN = createHTML('main', 'main', document.body);
  const WRAPPER = createHTML('div', 'wrapper', MAIN);
  createHTML('h1', 'title', WRAPPER, 'Virtual keyboard');
  const TEXTAREA = createHTML('textarea', 'textarea', WRAPPER);
  TEXTAREA.addEventListener('blur', () => TEXTAREA.focus());
  const KEYBOARD = createHTML('div', 'keyboard', WRAPPER);
  createHTML('div', 'keyboard__wrapper', KEYBOARD);
}

export function createKeyboard(keys) {
  let keyboardWrapper = document.querySelector('.keyboard__wrapper');
  keys.forEach(keyObj => {
    let key = createHTML('div', 'key', keyboardWrapper, `${keyObj.lowerEn}`);
    key.classList.add(`${keyObj.code}`);
  });
}

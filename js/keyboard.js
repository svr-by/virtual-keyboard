import { buildElement } from './functions.js';
import { Key, KEY_CODES } from './keys.js';

export default class Keyboard {
  constructor() {
    this.lang = 'ENG';
    this.shift = false;
    this.capsLk = false;
    this.elements = {};
    this.keys = KEY_CODES.map(keyObj => new Key(keyObj));
  }

  buildKeyboard(wrapper) {
    this.elements.title = buildElement('h1', 'title', wrapper, 'Virtual keyboard');
    this.elements.textarea = buildElement('textarea', 'textarea', wrapper);
    this.elements.keyboard = buildElement('div', 'keyboard', wrapper);
    this.elements.keyboardWrap = buildElement('div', 'keyboard__wrapper', this.elements.keyboard);
    this.keys.forEach(keyObj => this.elements.keyboardWrap.appendChild(keyObj.element));
    // this.addListeners();
  }
}

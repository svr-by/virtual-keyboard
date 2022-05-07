import { buildElement } from './functions.js';
import { Key, KEY_CODES } from './keys.js';

export default class Keyboard {
  constructor(lang) {
    this.lang = lang;
    this.shift = false;
    this.capsLk = false;
    this.elements = {};
    this.keys = KEY_CODES.map(keyObj => new Key(keyObj, this.lang));
  }

  buildKeyboard(wrapper) {
    this.elements.title = buildElement('h1', 'title', wrapper, 'Virtual keyboard');
    this.elements.textarea = buildElement('textarea', 'textarea', wrapper);
    this.elements.keyboard = buildElement('div', 'keyboard', wrapper);
    this.elements.keyboardInner = buildElement('div', 'keyboard__inner', this.elements.keyboard);
    this.keys.forEach(keyObj => this.elements.keyboardInner.appendChild(keyObj.element));
    this.elements.help = buildElement('p', 'help', wrapper, 'Use Ctrl+Shift to switch language');
    this.addListeners();
  }

  addListeners() {
    document.addEventListener('keydown', event => {
      event.preventDefault();
      this.handleEventDown(event.code, event.ctrlKey);
    });

    document.addEventListener('keyup', event => {
      this.handleEventUp(event.code, event.ctrlKey);
    });

    this.elements.keyboardInner.addEventListener('mousedown', event => {
      event.preventDefault();
      let keyElement = event.target.closest('.key');
      if (keyElement) {
        let keyElementCode = keyElement.dataset.code;
        this.handleEventDown(keyElementCode);
        keyElement.addEventListener('mouseout', () => {
          this.handleEventUp(keyElementCode);
        });
      }
    });

    this.elements.keyboardInner.addEventListener('mouseup', event => {
      let keyElement = event.target.closest('.key');
      if (keyElement) {
        this.handleEventUp(keyElement.dataset.code);
      }
    });
  }

  handleEventDown(code, ctrlKey) {
    if (code === 'ShiftLeft' || code === 'ShiftRight') {
      if (ctrlKey === true) {
        this.lang = (this.lang === 'ENG') ? 'RUS' : 'ENG';
        localStorage.setItem('language', this.lang);
        this.chageChars();
      } else {
        this.shift = true;
        this.chageChars();
      }
    }
    let keyObj = this.keys.find(key => key.code === code);
    if (keyObj) keyObj.changeCondition(true);
  }

  handleEventUp(code, ctrlKey) {
    if (code === 'ShiftLeft' || code === 'ShiftRight') {
      if (ctrlKey !== true) {
        this.shift = false;
        this.chageChars();
      }
    }
    let keyObj = this.keys.find(key => key.code === code);
    if (keyObj) keyObj.changeCondition();
  }

  chageChars() {
    this.keys.forEach(keyObj => keyObj.chageVisibleChar(this.lang, this.shift));
  }
}

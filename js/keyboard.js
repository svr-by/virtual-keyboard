import { buildElement } from './functions.js';
import { Key, KEY_CODES } from './keys.js';

export default class Keyboard {
  constructor(lang) {
    this.lang = lang;
    this.shift = false;
    this.capsLk = false;
    this.elements = {};
    this.keys = KEY_CODES.map(keyObj => new Key(keyObj, this.lang));
    this.letterKeys = this.keys.filter(keyObj => keyObj.visibleChar.match(/[а-яА-ЯЁёa-zA-Z]/));
    this.nonLetterKeys = this.keys.filter(keyObj => keyObj.visibleChar.match(/[^а-яА-ЯЁёa-zA-Z]/));
  }

  buildKeyboard(wrapper) {
    this.elements.title = buildElement('h1', 'title', wrapper, 'Virtual keyboard');
    this.elements.textarea = buildElement('textarea', 'textarea', wrapper);
    this.elements.keyboard = buildElement('div', 'keyboard', wrapper);
    this.elements.keyboardInner = buildElement('div', 'keyboard__inner', this.elements.keyboard);
    this.keys.forEach(keyObj => this.elements.keyboardInner.appendChild(keyObj.element));
    this.elements.help = buildElement('p', 'help', wrapper, 'Use Ctrl+Shift to switch language. Windows OS.');
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
        if (this.capsLk) {
          this.chageAllChars();
          this.chageLetterChars(true);
        } else {
          this.chageAllChars();
        }
      } else {
        this.shift = true;
        this.chageAllChars();
      }
    }
    if (code === 'CapsLock') {
      this.capsLk = !this.capsLk;
      if (this.capsLk) {
        this.chageLetterChars(true);
      } else {
        this.chageAllChars();
      }
    }

    let keyObj = this.keys.find(key => key.code === code);
    if (keyObj) keyObj.changeCondition('press');
  }

  handleEventUp(code, ctrlKey) {
    if (code === 'ShiftLeft' || code === 'ShiftRight') {
      if (ctrlKey !== true) {
        this.shift = false;
        if (this.capsLk) {
          this.chageNonLetterChars();
        } else {
          this.chageAllChars();
        }
      }
    }
    let keyObj = this.keys.find(key => key.code === code);
    if (keyObj) keyObj.changeCondition('unpress');
  }

  chageAllChars(shift = this.shift) {
    this.keys.forEach(keyObj => keyObj.chageVisibleChar(this.lang, shift));
  }

  chageLetterChars(shift = this.shift) {
    this.letterKeys.forEach(keyObj => keyObj.chageVisibleChar(this.lang, shift));
  }

  chageNonLetterChars(shift = this.shift) {
    this.nonLetterKeys.forEach(keyObj => keyObj.chageVisibleChar(this.lang, shift));
  }
}

export class Key {
  constructor(key, lang) {
    this.code = key.code;
    [this.lowerEn, this.upperEn] = [key.lowerEn, key.upperEn];
    [this.lowerRu, this.upperRu] = [key.lowerRu, key.upperRu];
    // this.upperEn = key.upperEn;
    // this.lowerRu = key.lowerRu;
    // this.upperRu = key.upperRu;
    this.visibleChar = this.lowerEn;
    this.buildKey(lang);
  }

  buildKey(lang) {
    this.element = document.createElement('div');
    this.element.classList.add('key');
    this.element.dataset.code = this.code;
    if (this.lowerRu.match(/[а-яё]/)) {
      this.element.dataset.lang = lang;
    }
    this.chageVisibleChar(lang, false);
  }

  changeCondition(action) {
    if (action === 'press') {
      if (this.element.dataset.code === 'CapsLock') {
        this.element.classList.toggle('key--pressed');
      } else {
        this.element.classList.add('key--pressed');
      }
    }
    if (action === 'unpress') {
      if (this.element.dataset.code !== 'CapsLock') {
        this.element.classList.remove('key--pressed');
      }
    }
  }

  chageVisibleChar(lang, shift) {
    if (lang === 'ENG') {
      this.visibleChar = (shift === true) ? this.upperEn : this.lowerEn;
    }
    if (lang === 'RUS') {
      this.visibleChar = (shift === true) ? this.upperRu : this.lowerRu;
    }
    if (this.element.dataset.lang) this.element.dataset.lang = lang;

    this.element.innerText = this.visibleChar;
  }
}

export const KEY_CODES = [
  {
    code: 'Backquote', lowerEn: '`', upperEn: '~', lowerRu: 'ё', upperRu: 'Ё'
  },
  {
    code: 'Digit1', lowerEn: '1', upperEn: '!', lowerRu: '1', upperRu: '!'
  },
  {
    code: 'Digit2', lowerEn: '2', upperEn: '@', lowerRu: '2', upperRu: '"'
  },
  {
    code: 'Digit3', lowerEn: '3', upperEn: '#', lowerRu: '3', upperRu: '№'
  },
  {
    code: 'Digit4', lowerEn: '4', upperEn: '$', lowerRu: '4', upperRu: ';'
  },
  {
    code: 'Digit5', lowerEn: '5', upperEn: '%', lowerRu: '5', upperRu: '%'
  },
  {
    code: 'Digit6', lowerEn: '6', upperEn: '^', lowerRu: '6', upperRu: ':'
  },
  {
    code: 'Digit7', lowerEn: '7', upperEn: '&', lowerRu: '7', upperRu: '?'
  },
  {
    code: 'Digit8', lowerEn: '8', upperEn: '*', lowerRu: '8', upperRu: '*'
  },
  {
    code: 'Digit9', lowerEn: '9', upperEn: '(', lowerRu: '9', upperRu: '('
  },
  {
    code: 'Digit0', lowerEn: '0', upperEn: ')', lowerRu: '0', upperRu: ')'
  },
  {
    code: 'Minus', lowerEn: '-', upperEn: '_', lowerRu: '-', upperRu: '_'
  },
  {
    code: 'Equal', lowerEn: '=', upperEn: '+', lowerRu: '=', upperRu: '+'
  },
  {
    code: 'Backspace', lowerEn: 'Backspace', upperEn: 'Backspace', lowerRu: 'Backspace', upperRu: 'Backspace'
  },
  {
    code: 'Tab', lowerEn: 'Tab', upperEn: 'Tab', lowerRu: 'Tab', upperRu: 'Tab'
  },
  {
    code: 'KeyQ', lowerEn: 'q', upperEn: 'Q', lowerRu: 'й', upperRu: 'Й'
  },
  {
    code: 'KeyW', lowerEn: 'w', upperEn: 'W', lowerRu: 'ц', upperRu: 'Ц'
  },
  {
    code: 'KeyE', lowerEn: 'e', upperEn: 'E', lowerRu: 'у', upperRu: 'У'
  },
  {
    code: 'KeyR', lowerEn: 'r', upperEn: 'R', lowerRu: 'к', upperRu: 'К'
  },
  {
    code: 'KeyT', lowerEn: 't', upperEn: 'T', lowerRu: 'е', upperRu: 'Е'
  },
  {
    code: 'KeyY', lowerEn: 'y', upperEn: 'Y', lowerRu: 'н', upperRu: 'Н'
  },
  {
    code: 'KeyU', lowerEn: 'u', upperEn: 'U', lowerRu: 'г', upperRu: 'Г'
  },
  {
    code: 'KeyI', lowerEn: 'i', upperEn: 'I', lowerRu: 'ш', upperRu: 'Ш'
  },
  {
    code: 'KeyO', lowerEn: 'o', upperEn: 'O', lowerRu: 'щ', upperRu: 'Щ'
  },
  {
    code: 'KeyP', lowerEn: 'p', upperEn: 'P', lowerRu: 'з', upperRu: 'З'
  },
  {
    code: 'BracketLeft', lowerEn: '[', upperEn: '{', lowerRu: 'х', upperRu: 'Х'
  },
  {
    code: 'BracketRight', lowerEn: ']', upperEn: '}', lowerRu: 'ъ', upperRu: 'Ъ'
  },
  {
    code: 'Backslash', lowerEn: '\\', upperEn: '|', lowerRu: '\\', upperRu: '/'
  },
  {
    code: 'Delete', lowerEn: 'Del', upperEn: 'Del', lowerRu: 'Del', upperRu: 'Del'
  },
  {
    code: 'CapsLock', lowerEn: 'CapsLock', upperEn: 'CapsLock', upperRu: 'CapsLock', lowerRu: 'CapsLock'
  },
  {
    code: 'KeyA', lowerEn: 'a', upperEn: 'A', upperRu: 'Ф', lowerRu: 'ф'
  },
  {
    code: 'KeyS', lowerEn: 's', upperEn: 'S', upperRu: 'Ы', lowerRu: 'ы'
  },
  {
    code: 'KeyD', lowerEn: 'd', upperEn: 'D', upperRu: 'В', lowerRu: 'в'
  },
  {
    code: 'KeyF', lowerEn: 'f', upperEn: 'F', upperRu: 'А', lowerRu: 'а'
  },
  {
    code: 'KeyG', lowerEn: 'g', upperEn: 'G', upperRu: 'П', lowerRu: 'п'
  },
  {
    code: 'KeyH', lowerEn: 'h', upperEn: 'H', upperRu: 'Р', lowerRu: 'р'
  },
  {
    code: 'KeyJ', lowerEn: 'j', upperEn: 'J', upperRu: 'О', lowerRu: 'о'
  },
  {
    code: 'KeyK', lowerEn: 'k', upperEn: 'K', upperRu: 'Л', lowerRu: 'л'
  },
  {
    code: 'KeyL', lowerEn: 'l', upperEn: 'L', upperRu: 'Д', lowerRu: 'д'
  },
  {
    code: 'Semicolon', lowerEn: ';', upperEn: ':', upperRu: 'Ж', lowerRu: 'ж'
  },
  {
    code: 'Quote', lowerEn: "'", upperEn: '"', upperRu: 'Э', lowerRu: 'э'
  },
  {
    code: 'Enter', lowerEn: 'Enter', upperEn: 'Enter', upperRu: 'Enter', lowerRu: 'Enter'
  },
  {
    code: 'ShiftLeft', lowerEn: 'Shift', upperEn: 'Shift', upperRu: 'Shift', lowerRu: 'Shift'
  },
  {
    code: 'KeyZ', lowerEn: 'z', upperEn: 'Z', upperRu: 'Я', lowerRu: 'я'
  },
  {
    code: 'KeyX', lowerEn: 'x', upperEn: 'X', upperRu: 'Ч', lowerRu: 'ч'
  },
  {
    code: 'KeyC', lowerEn: 'c', upperEn: 'C', upperRu: 'С', lowerRu: 'с'
  },
  {
    code: 'KeyV', lowerEn: 'v', upperEn: 'V', upperRu: 'М', lowerRu: 'м'
  },
  {
    code: 'KeyB', lowerEn: 'b', upperEn: 'B', upperRu: 'И', lowerRu: 'и'
  },
  {
    code: 'KeyN', lowerEn: 'n', upperEn: 'N', upperRu: 'Т', lowerRu: 'т'
  },
  {
    code: 'KeyM', lowerEn: 'm', upperEn: 'M', upperRu: 'Ь', lowerRu: 'ь'
  },
  {
    code: 'Comma', lowerEn: ',', upperEn: '<', upperRu: 'Б', lowerRu: 'б'
  },
  {
    code: 'Period', lowerEn: '.', upperEn: '>', upperRu: 'Ю', lowerRu: 'ю'
  },
  {
    code: 'Slash', lowerEn: '/', upperEn: '?', upperRu: '.', lowerRu: ','
  },
  {
    code: 'ArrowUp', lowerEn: '▲', upperEn: '▲', upperRu: '▲', lowerRu: '▲'
  },
  {
    code: 'ShiftRight', lowerEn: 'Shift', upperEn: 'Shift', upperRu: 'Shift', lowerRu: 'Shift'
  },
  {
    code: 'ControlLeft', lowerEn: 'Ctrl', upperEn: 'Ctrl', upperRu: 'Ctrl', lowerRu: 'Ctrl'
  },
  {
    code: 'MetaLeft', lowerEn: 'Win', upperEn: 'Win', upperRu: 'Win', lowerRu: 'Win'
  },
  {
    code: 'AltLeft', lowerEn: 'Alt', upperEn: 'Alt', upperRu: 'Alt', lowerRu: 'Alt'
  },
  {
    code: 'Space', lowerEn: ' ', upperEn: ' ', upperRu: ' ', lowerRu: ' '
  },
  {
    code: 'AltRight', lowerEn: 'Alt', upperEn: 'Alt', upperRu: 'Alt', lowerRu: 'Alt'
  },
  {
    code: 'ArrowLeft', lowerEn: '◄', upperEn: '◄', upperRu: '◄', lowerRu: '◄'
  },
  {
    code: 'ArrowDown', lowerEn: '▼', upperEn: '▼', upperRu: '▼', lowerRu: '▼'
  },
  {
    code: 'ArrowRight', lowerEn: '►', upperEn: '►', upperRu: '►', lowerRu: '►'
  },
  {
    code: 'ControlRight', lowerEn: 'Ctrl', upperEn: 'Ctrl', upperRu: 'Ctrl', lowerRu: 'Ctrl'
  }
];

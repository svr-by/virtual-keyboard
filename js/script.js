import { buildPage } from './functions.js';
import Keyboard from './keyboard.js';

let language = localStorage.getItem('language') || 'ENG';
const WRAPPER = buildPage();
const KEYBOARD = new Keyboard(language);
KEYBOARD.buildKeyboard(WRAPPER);

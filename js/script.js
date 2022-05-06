import { buildPage } from './functions.js';
import Keyboard from './keyboard.js';

const WRAPPER = buildPage();
const KEYBOARD = new Keyboard();
KEYBOARD.buildKeyboard(WRAPPER);

import zebra from 'zebra';
import Control from './Control';
import View from '../view';

class Button extends Control {
  get control() {
    return new zebra.ui.Button(this.properties)
  }
}

export default {
  label: 'Button',
  menus: {
    view: View,
    button: Button
  }
}
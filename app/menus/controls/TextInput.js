import zebra from 'zebra';
import Menu from '../menu';
import View from '../view';
import Control from './Control';

class TextInputSettings extends Settings {
  // draw sliders from range values
  settings() {
    return {
    }
  }
}

// http://repo.zebkit.org/latest/api/classes/zebra.ui.TextField.html
class TextInput extends Control {
  get settings() {
    return {};
  }

  control() {
    new zebra.ui.TextField();
  }
}

export default {
  label: 'Text input',
  menus: {
    view: View,
    textInput: TextInput
  }
}
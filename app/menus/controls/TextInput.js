import Menu from '../menu';
import View from '../view';
import TextInput from './TextInput';

class TextInput extends Menu {

}

export default {
  label: 'Text input',
  menus: {
    view: View,
    textInput: TextInput
  }
}
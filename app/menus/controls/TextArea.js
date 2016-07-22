import Menu from '../menu';
import View from '../view';
import TextInput from './TextInput';

class TextArea extends Menu {

}

export default {
  label: 'MultiText',
  menus: {
    view: View,
    textInput: TextInput,
    textArea: TextArea
  }
}
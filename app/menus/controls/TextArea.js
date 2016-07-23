import zebra from 'zebra';
import Menu from '../menu';
import TextInput from './TextInput';

class TextArea extends TextInput {
  get control() {
    new zebra.ui.TextArea(this.properties);
  }
}

export default {
  label: 'MultiText',
  menus: {
    textInput: TextInput,
    textArea: TextArea
  }
}
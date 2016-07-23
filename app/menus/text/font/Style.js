import zebra from 'zebra';
import Action from './TextAction';

class Bold extends Action {
  onSelect(e) {
    target.setTextStyle('bold');
  }
}

class Italic extends Action {
  onSelect(e) {
    target.setTextStyle('italic');
  }
}

class Underline extends Action {
  onSelect(e) {
    target.setTextStyle('underline');
  }
}

export default {
  textBold: {
    class: Bold,
    icon: 'bold', // fa icon
  },
  textItalic: {
    class: Italic,
    icon: 'italic', // fa icon
  },
  textUnderline: {
    class: Underline,
    icon: 'underline', // fa icon
  }

}

import zebra from 'zebra';
import Action from './TextAction';

class IndentLeft extends Action {
  onSelect(e) {
    target.setIndent('left');
  }
}

class IndentRight extends Action {
  onSelect(e) {
    target.setIndent('right');
  }
}


export default {
  indentLeft: {
    class: IndentLeft,
    icon: 'align-left', // fa icon
  },
  indentRight: {
    class: IndentRight,
    icon: 'align-right', // fa icon

  }
}

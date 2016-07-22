import Menu from '../menu';
import SelectFont from '../SelectFont';
import FontStyle from '../FontStyle';
import SetIndentation from './SetIndentation';

class TextMenu extends Menu {
  displayCondition() {
    this.clipBoard.items > 0;
  }
}

export default {
  label: 'Text',
  class: TextMenu,
  icon: 'text',
  menus: {
    selectFont: SelectFont,
    fontStyle: FontStyle,
    setIndentation: SetIndentation
  }
}

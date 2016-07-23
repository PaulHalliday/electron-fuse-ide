import Menu from '../menu';
import Controls from './Controls';

class AddView extends Menu {
  onSelect() {
    this.displayMenus();
  }
}

export default {
  label: 'Add',
  class: AddView,
  icon: 'plus', // fa icon
  defaultSelection: 'button',
  menus: {
    // since only one item, we show children directly!
    // controls that can be added
    controls: Controls
  }
}


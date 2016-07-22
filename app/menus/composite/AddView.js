import Controls from './Controls';

class AddView {
  onSelect(e) {
    this.displaySubMenus();
  }
}

export default {
  columnLayout: {
    label: 'Column',
    class: AddView
    icon: 'plus', // fa icon
    menus: {
      controls: Controls
    }
  }
}

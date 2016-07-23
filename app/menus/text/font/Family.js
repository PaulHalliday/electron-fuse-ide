import Action from './TextAction';

class FontFamily extends Action {
  // display available fonts
  render() {
  }

  onSelect(e) {
    this.setTextFont(e.value);
  }
}

var menus = {
  font: {
    class: FontFamily,
    icon: 'font', // fa icon
  },
}
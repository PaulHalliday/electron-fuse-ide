class Font extends Action {
  // display available fonts
  render() {
  }

  onSelect(e) {
    target.setTextFont(e.value);
  }
}

var menus = {
  font: {
    class: Font,
    icon: 'font', // fa icon
  },
}
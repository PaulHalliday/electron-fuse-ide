class TextMenu extends MenuItem {
  displayCondition() {
    this.clipBoard.items > 0;
  }
}

var menus = {
  textMenu: {
    class: TextMenu,
    menus: {
      selectFont: SelectFont,
      fontStyle: FontStyle,
      setIndentation: SetIndentation
    }
  }
}
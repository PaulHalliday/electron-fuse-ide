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


var menus = {
  indentLeft: {
    class: IndentLeft,
    icon: 'align-left', // fa icon
  },
  indentRight: {
    class: IndentRight,
    icon: 'align-right', // fa icon

  }
}

export default menus;
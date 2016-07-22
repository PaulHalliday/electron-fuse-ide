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

var menus = {
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

export default menus;
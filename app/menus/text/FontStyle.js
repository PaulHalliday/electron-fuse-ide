class Bold extends Action {
  onClick(e) {
    target.setTextStyle('bold');
  }
}

class Italic extends Action {
  onClick(e) {
    target.setTextStyle('italic');
  }
}

class Underline extends Action {
  onClick(e) {
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
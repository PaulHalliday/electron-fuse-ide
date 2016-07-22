class Position {
  onSelect(e) {
    this.target.setPosition(name);
  }
}

class SetTop extends Position {
  onSelect(e) {
    this.setPosition('top');
  }
}

class SetRight extends Position {
  onSelect(e) {
    this.setPosition('right'});
  }
}

class SetBottom extends Position {
  onSelect(e) {
    this.setPosition('bottom'});
  }
}

class SetLeft extends Position {
  onSelect(e) {
    this.setPosition('left'});
  }
}

class SetCenter extends Position {
  onSelect(e) {
    this.setPosition('center'});
  }
}

export default  menus = {
  display: null, // for alternative menu display manager, such as cross
  setTop: {
    class: SetTop,
    icon: 'align-top', // fa icon
  },
  setRight: {
    class: SetRight,
    icon: 'align-right', // fa icon
  },
  setBottom: {
    class: SetBottom,
    icon: 'align-bottom', // fa icon
  },
  setLeft: {
    class: SetLeft,
    icon: 'align-bottom', // fa icon
  },
  setCenter: {
    class: SetCenter,
    icon: 'align-bottom', // fa icon
  }
}
class MenuItem {
  constructor(ctx, target) {
    this.ctx = ctx;
    this.target = target;
  }
}

class Copy extends MenuItem {
  onSelect(e) {
    target.setAlignment('left');
  }
}

// Delete
class Cut extends MenuItem {
  onSelect(e) {
    target.setAlignment('left');
  }
}

// Only available when clipBoard has items on it
class Paste extends MenuItem {
  displayCondition() {
    this.clipBoard.items > 0;
  }

  onSelect(e) {
    target.setAlignment('left');
  }
}


var menus = {
  copy: {
    class: Copy,
    icon: 'copy', // fa icon
  },
  cut: {
    class: CenterAlign,
    icon: 'cut', // fa icon
  },
  paste: {
    class: CenterAlign,
    icon: 'paste', // fa icon
  }
}
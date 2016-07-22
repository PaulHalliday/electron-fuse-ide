class LeftAlign {
  constructor(target) {
    this.target = target;
  }

  onClick(e) {
    target.setAlignment('left');
  }
}

var menus = {
  left: {
    class: LeftAlign,
    icon: 'left', // fa icon
  },
  center: {

  },
  right: {
    class: Right
  }
}

export default class Alignment {

}
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
    icon: 'align-left', // fa icon
  },
  center: {
    class: CenterAlign,
    icon: 'align-center', // fa icon
  },
  right: {
    class: RightAlign,
    icon: 'align-right', // fa icon

  }
}

export default class Alignment {

}
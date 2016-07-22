class LeftAlign {
  constructor(target) {
    this.target = target;
  }

  onClick(e) {
    target.setAlignment('left');
  }
}

var menus = {
  alignLeft: {
    class: LeftAlign,
    icon: 'align-left', // fa icon
  },
  alignCenter: {
    class: CenterAlign,
    icon: 'align-center', // fa icon
  },
  alignRight: {
    class: RightAlign,
    icon: 'align-right', // fa icon

  }
}

export default class Alignment {

}
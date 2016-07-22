class LeftAlign {
  constructor(target) {
    this.target = target;
  }

  onClick(e) {
    target.setAlignment('left');
  }
}

var menus = {
  stroke: {
    class: SetStroke,
    icon: 'pencil', // fa icon
  },
  background: {
    class: CenterAlign,
    icon: 'align-center', // fa icon
  },
  fill: {
    class: RightAlign,
    icon: 'align-right', // fa icon

  }
}

export default class Alignment {

}
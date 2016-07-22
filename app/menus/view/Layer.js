class SendToBack {
  constructor(target) {
    this.target = target;
  }

  onClick(e) {
    target.setAlignment('left');
  }
}

var menus = {
  toBack: {
    label: 'To back',
    class: SendToBack
    icon: 'toBack', // fa icon
  },
  toFront: {
    label: 'To front',
    class: SendToBack
    icon: 'toBack', // fa icon
  },
  back: {
    label: 'Back',
    class: OneBack
    icon: 'back', // fa icon
  },
  forward: {
    label: 'Forward',
    class: OneForward
    icon: 'forward', // fa icon
  },
}

export default class Layer {

}
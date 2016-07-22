class SendToBack {
  constructor(target) {
    this.target = target;
  }

  onSelect(e) {
    target.parent.moveTo(0, target);
  }
}

class SendToFront {
  constructor(target) {
    this.target = target;
  }

  onSelect(e) {
    target.parent.moveTo(parent.kids.length, target);
  }
}


class OneBack {
  constructor(target) {
    this.target = target;
  }

  onSelect(e) {
    var pos = target.parent.find(target).position;
    target.parent.moveTo(pos - 1, target);
  }
}

class OneForward {
  constructor(target) {
    this.target = target;
  }

  onSelect(e) {
    var pos = target.parent.find(target).position;
    target.parent.moveTo(pos + 1, target);
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
    class: SendToFront
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
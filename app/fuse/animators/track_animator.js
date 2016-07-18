import Animator from './Animator';

var fs = require('fs');
var easeValues = fs.readFileSync('easing.txt').toString().split("\n");

function validate(value) {
  return easeValues.indexOf(value) > -1;
}

export default class TrackAnimator extends Animator {
  constructor(options = {}) {
    this.delay = options.delay || 0.5;
    this.mixOp = options.mixOp;

    this.delayBack = options.delay || 0.5;
    this.duration = options.duration || 0.5;
    this.durationBack = options.durationBack || 0.5;
    this.weight = options.weight || 1;
  }

  // Offset
  // Add
  // Weight
  set easing(value) {
    if (!validate(value)) {
      throw 'Invalid ease value';
    }
    this._easing = value;
  }

  get easing() {
    return this._easing;
  }

  set easingBack(value) {
    if (!validate(value)) {
      throw 'Invalid ease value';
    }
    this._easingBack = value;
  }

  get easingBack() {
    return this._easingBack;
  }
}

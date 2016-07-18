export default class Animator {
  constructor(options = {}) {
    this.delay = options.delay;
    this.mixOp = options.mixOp;
  }

  // Offset
  // Add
  // Weight
  set mixOp(value) {
    this._mixOp = value;
  }
}

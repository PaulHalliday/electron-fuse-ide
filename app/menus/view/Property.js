export default class Property {
  constructor(ctx, target) {
    this.ctx = ctx;
    this.target = target;
  }

  setProperty(property) {
    this.target.set(property);
  }
}

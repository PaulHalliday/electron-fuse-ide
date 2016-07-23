export default class MenuItem {
  constructor(ctx, target) {
    this.ctx = ctx;
  }

  back() {
    this.ctx.menu.back();
  }
}
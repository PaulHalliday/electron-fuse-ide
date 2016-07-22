export default class Menu {
  constructor(ctx, target) {
    this.ctx = ctx;
  }

  back() {
    this.ctx.menu.back();
  }

  displaySubMenus() {
    this.ctx.menu.current.menus.display();
  }
}
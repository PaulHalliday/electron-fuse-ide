export default class Menu extends MenuItem {
  constructor(ctx, target, items) {
    super();
    this.items = items;
  }

  displaySubMenus() {
    this.items.display();
  }
}
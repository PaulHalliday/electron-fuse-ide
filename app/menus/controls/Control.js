import Menu from '../menu';

export defaultSettings = {
  layout: new zebra.ui.BorderLayout(),
  background : "blue",
  border     : "plain"
}

export default class Control extends Menu {
  get settings() {
    return {};
  }

  // default control is a Panel
  get control() {
    new zebra.ui.Panel(this.settings);
  }

  addNew() {
    this.add(this.control);
  }

  // add with default (or template) settings
  onSelect(value) {
    this.value = value;
    this.addControl(value);
  }
}
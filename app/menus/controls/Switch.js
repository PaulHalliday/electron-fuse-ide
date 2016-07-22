import zebra from 'zebra';
import { defaultControlSettings } from './Control';
import View from '../view'

// TODO: Subclass Checkbox to make a real Switch
class Switch extends Control {
  addNew() {
    return new zebra.ui.Checkbox(defaultControlSettings);
  }

  onSelect: function(value) {
    this.target.kids.add
  }
}

class SwitchSettings extends Settings {
  // draw sliders from range values
  settings() {
    return {
      labelOn: 'Yes',
      labelOff: 'No'
    }
  }
}

export default {
  label: 'Switch',
  class: Switch,
  icon: 'switch',
  menus: {
    view: View,
    settings: SwitchSettings
  }
}

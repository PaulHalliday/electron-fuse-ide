import zebra from 'zebra';
import Control from './Control';
import View from '../view'

// TODO: Subclass Checkbox to make a real Switch
// http://repo.zebkit.org/latest/api/classes/zebra.ui.Checkbox.html
// Check-box UI component. The component is a container that consists from two other UI components:
// - Box component to keep checker indicator
// - Label component to paint label
// Developers are free to customize the component as they want. 
class Switch extends Control {
  get settings() {
    return {};
  }

  control() {
    new zebra.ui.TextField(this.properties);
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

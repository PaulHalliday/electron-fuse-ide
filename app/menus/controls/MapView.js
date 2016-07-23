import zebra from 'zebra';
import Control from './Control';
import View from '../view';

class MapView extends Control {
  get control() {
    return new zebra.ui.Map(this.properties)
  }
}

export default {
  label: 'Map',
  menus: {
    view: View,
    webView: MapView
  }
}
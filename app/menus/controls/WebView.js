import zebra from 'zebra';
import Control from './Control';
import View from '../view';
import Menu from '../menu';

class WebViewSettings extends Settings {
  // draw sliders from range values
  settings() {
    return {
      //...
    }
  }
}

// http://repo.zebkit.org/latest/api/classes/zebra.ui.TextField.html
class WebView extends Control {
  get properties() {
    return {};
  }

  control() {
    new zebra.ui.WebPanel(this.properties);
  }
}

export default {
  label: 'Web',
  menus: {
    view: View,
    webView: WebView
  }
}
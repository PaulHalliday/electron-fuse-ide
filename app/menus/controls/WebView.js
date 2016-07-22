import View from '../view';
import Menu from '../menu';

class WebView extends Menu {

}

export default {
  label: 'Web',
  menus: {
    view: View,
    webView: WebView
  }
}
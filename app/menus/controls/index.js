import Slider from './Slider';
import Switch from './Switch';
import Button from './Button';
import MapView from './MapView';
import WebView from './WebView';
import TextInput from './TextInput';
import TextArea from './TextArea';
import Composite from './Composite';

// each control has general settings and some particulars to that control
// The menus point to menus which are collected into a single menu at that level
export default {
  // default panel
  composite: Composite,
  button: Button,
  slider: Slider,
  switch: Switch,
  mapView: MapView,
  webView: WebView,
  textInput: TextInput,
  textArea: TextArea
};

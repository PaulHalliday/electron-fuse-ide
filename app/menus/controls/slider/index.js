import zebra from 'zebra';
import Control from './Control';


export class Slider extends Control {
  get settings() {
    return {};
  }

  get control() {
    return new zebra.ui.Slider(this.settings);
  }
}

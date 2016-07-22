import zebra from 'zebra';

// TODO
class Range {
  constructor(min, max) {
    this.min = min;
    this.max = max;
  }
}

class Slider extends Control {
  addNew() {
    return new zebra.ui.Slider(defaultPanelSettings);
  }

  onSelect: function(value) {
    this.target.kids.add
  }
}

class SliderSettings extends Settings {
  // draw sliders from range values
  settings() {
    return {
      minValue: range(0, 100),
      maxValue: range(0, 100),
      defaultValue: range(0, 100)
    }
  }

  validate() {
    this.validateMinMax() && validateDefaultValue();
  }

  validateMinMax() {
    return this.minValue <= this.maxValue;
  }

  validateDefaultValue() {
    return this.defaultValue >= this.minValue && this.defaultValue <= this.maxValue;
  }
}

export default {
  label: 'Slider',
  class: Slider,
  icon: 'slider',
  menus: {
    view: ViewMenu,
    settings: SliderSettings
  }
}

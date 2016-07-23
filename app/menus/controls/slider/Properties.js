import ControlSettings from '../settings';

// TODO
class Range {
  constructor(min, max) {
    this.min = min;
    this.max = max;
  }
}

var range = function(min, max) {
  return new Range(min, max);
}

// the modal used to set all specific Slider settings
// contains slider controls to set Slider properties:
// - minValue
// - maxValue
// - defaultValue
export default class SliderProperties extends ControlSettings {
  // draw sliders from range values
  properties() {
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

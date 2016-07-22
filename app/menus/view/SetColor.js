class Color extends Property {
  setColor(name, color) {
    this.setProperty({(name): color});
  }
}

export class SetBackgroundColor extends Color {
  onSelect(e) {
    this.setColor('backgroundColor', e.value);
  }
}

export class SetStrokeColor extends Color {
  onSelect(e) {
    this.setColor('strokeColor', e.value);
  }
}

export class SetFillColor extends Color {
  onSelect(e) {
    this.setColor('fillColor', e.value);
  }
}

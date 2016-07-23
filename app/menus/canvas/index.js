class OnOff {

}

class Grid extends OnOff {
  onSelect(e) {
    this.canvas.setGrid(e.gridOn));
  }
}

class Rulers extends OnOff {
  onSelect(e) {
    this.canvas.setRulers(e.rulersOn));
  }
}

// Slider with +/- buttons
class SelectValue {

}

class Size extends SelectValue {
  onSelect(e) {
    this.canvas.setSize({width: e.width, height: e.height});
  }
}

class Zoom extends SelectValue {
  onSelect(e) {
    this.canvas.setZoom({zoom: e.zoom});
  }
}

export default {
  grid: Grid,
  rulers: Rulers,
  size: Size,
  zoom: Zoom
}
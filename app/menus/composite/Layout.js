class Layout {
  setLayout(name, value) {
    this.target.setLayout(name, value);
  }
}

class DockLayout extends Layout {
  onSelect(e) {
    this.setLayout('dock', e.value);
  }
}

class StackLayout extends Layout {
  onSelect(e) {
    this.setLayout('stack', e.value);
  }
}

class ColumnLayout extends Layout {
  onSelect(e) {
    this.setLayout('column', e.value);
  }
}

class GridLayout extends Layout {
  onSelect(e) {
    this.setLayout('grid', , e.value);
  }
}


export default {
  columnLayout: {
    label: 'Column',
    class: ColumnLayout
    icon: 'column', // fa icon
  },
  stackLayout: {
    label: 'Stack',
    class: StackLayout
    icon: 'stack', // fa icon
  },
  dockLayout: {
    label: 'Dock',
    class: DockLayout
    icon: 'dock', // fa icon
  }
}

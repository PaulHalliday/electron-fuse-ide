import Menu from './Menu';

class Layout {
  setLayout(name, value) {
    this.target.setLayout(name, value);
  }
}

// var p = new zebra.ui.Panel(new zebra.layout.BorderLayout());

// Layout manager implementation that logically splits component area into five areas: 
// TOP, BOTTOM, LEFT, RIGHT and CENTER.
class DockLayout extends Layout {
  onSelect(e) {
    this.setLayout('border', e.value);
  }
}

// Layout manager implementation that places layoutbale components on top of each other stretching its to fill all available parent component space
// http://repo.zebkit.org/latest/api/classes/zebra.layout.StackLayout.html
class StackLayout extends Layout {
  onSelect(e) {
    this.setLayout('stack', e.value);
  }
}

// List layout places components vertically one by one
class ColumnLayout extends Layout {
  onSelect(e) {
    this.setLayout('column');
  }
}

// Grid layout manager. can be used to split a component area to number of virtual cells where children components can be placed. 
// http://repo.zebkit.org/latest/api/classes/zebra.layout.GridLayout.html
class GridLayout extends Layout {
  onSelect(e) {
    this.setLayout('grid', e.value);
  }
}

class CompositeLayout extends Menu {
  onSelect(e) {
    this.setLayout(this.defaultSelection);
  }
}

// Choosing the composite will add a default composite and open sub menu to choose layout
export default {
  class: CompositeLayout,
  label: 'Layout',
  icon: 'layout',
  defaultSelection: 'stackLayout',
  menus: {
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
}

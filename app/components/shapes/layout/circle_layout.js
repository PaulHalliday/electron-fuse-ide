// ColumnCount : int UX
// Number of columns to lay out.
// ColumnSize : float UX
// Set size of a column.
// ColumnSpacing : float UX
// Spacing between each column.
// ItemSpacing : float UX
// Spacing between each item of a column.
// Orientation : Orientation UX
// The orientation in which columns are arranged.
// Sizing : ColumnLayoutSizing

import fabric from 'fabric';

// @CircleLayout must be placed inside a Panel, and will apply to the elements inside it.
export default fabric.util.createClass({

  type: 'circle.layout',

  initialize: function(options) {
    options || (options = {
      originY: 'top',
      originX: 'center'
      parent: {}
    });

    if (options.parent.type !== 'panel') {
      throw 'CircleLayout must be placed inside a panel!';
    }

    this.callSuper('initialize', options);
    this.set('columnCount', options.columnCount || 2);
    this.set('columnSize', options.columnSize || 20);
    this.set('columnSpacing', options.columnSpacing || 20);
    this.set('itemSpacing', options.itemSpacing || 20);
    this.set('orientation', options.itemSpacing || 'Horizontal'); // Vertical
    this.set('sizing', options.itemSpacing || 'Fill'); // Fixed
  },

  toObject: function() {
    return fabric.util.object.extend(this.callSuper('toObject'), {
      columnCount: this.get('columnCount'),
      columnSize: this.get('columnSize'),
      columnSpacing: this.get('columnSpacing'),
      itemSpacing: this.get('itemSpacing'),
      orientation: this.get('orientation'),
      itemSpacing: this.get('sizing'),
    });
  },

  // marks parent element with a layout icon
  _render: function(ctx) {
    this.parent.layout(this);
  }

  _arrangeItems: function() {
  }
});

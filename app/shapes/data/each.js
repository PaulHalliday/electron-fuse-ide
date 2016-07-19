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
      items: []
    });

    this.callSuper('initialize', options);
    this.set('items', options.items || []);
  },

  toObject: function() {
    return fabric.util.object.extend(this.callSuper('toObject'), {
      items: this.get('items')
    });
  },

  // items: [
  //     { name: "Jake", age: 24 },
  //     { name: "Julie", age: 25 },
  //     { name: "Jerard", age: 26 }
  // ]

  // <Each Items="{items}">
  //     <StackPanel>
  //         <Text Value="{name}" />
  //         <Text Value="{age}" />
  //     </StackPanel>
  // </Each>
  _render: function(ctx) {
    this.parent.layout(this);

    for (let item of this.items) {
      for (let child of this.children) {
        // interpolate item data on children all the way down...
      }
    }
  }

  _arrangeItems: function() {
  }
});

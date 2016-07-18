import fabric from 'fabric';

// @CircleLayout must be placed inside a Panel, and will apply to the elements inside it.
export default fabric.util.createClass({

  type: 'fuse.case',

  initialize: function(options) {
    options || (options = {
    });

    // must be child of match
    if (options.parent.type !== 'fuse.match') {
      throw 'Must be child of a Match';
    }

    this.callSuper('initialize', options);
    this.set('test', options.test || '');
  },
a
  toObject: function() {
    return fabric.util.object.extend(this.callSuper('toObject'), {
      test: this.get('test')
    });
  },

  // items: [
  //     { name: "Jake", age: 24 },
  //     { name: "Julie", age: 25 },
  //     { name: "Jerard", age: 26 }
  // ]

  // <Select Data="{complex.item1.subitem1}">
  //     <Text Value="{name}" />
  //     <Text Value="{age}" />
  // </Select>
  _render: function(ctx) {
    this.parent.layout(this);

    for (let child of this.children) {
      // interpolate item data on children all the way down...
    }
  }

  _arrangeItems: function() {
  }
});

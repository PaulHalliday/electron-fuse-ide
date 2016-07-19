import fabric from 'fabric';

// Abstract control element that can have child elements
export default fabric.util.createClass(fabric.Rect, {

  type: 'fuse.control',

  initialize: function(options) {
    options || (options = { });

    this.callSuper('initialize', options);
    this.set('background', options.background || []);
  },

  toObject: function() {
    return fabric.util.object.extend(this.callSuper('toObject'), {
      background: this.get('background')
    });
  },

  _render: function(ctx) {
    this.callSuper('_render', ctx);
  }
});

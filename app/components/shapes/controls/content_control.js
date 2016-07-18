import fabric from 'fabric';

// Abstract control element that can have child elements
export default fabric.util.createClass(fabric.Rect, {

  type: 'content.control',

  initialize: function(options) {
    options || (options = { });

    this.callSuper('initialize', options);
    this.set('children', options.children || []);
  },

  toObject: function() {
    return fabric.util.object.extend(this.callSuper('toObject'), {
      children: this.get('children')
    });
  },

  _render: function(ctx) {
    this.callSuper('_render', ctx);
  }
});

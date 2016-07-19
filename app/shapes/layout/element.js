import fabric from 'fabric';

export default fabric.util.createClass(fabric.Rect, {

  type: 'element',

  initialize: function(options) {
    options || (options = { });

    this.callSuper('initialize', options);
    this.set('alignment', options.alignment || 'left');
    this.set('margin', options.margin || 0);
    this.set('maxHeight', options.maxHeight || 0);
    this.set('maxWidth', options.maxWidth || 0);
    this.set('minHeight', options.minHeight || 0);
    this.set('minWidth', options.minWidth || 0);
    this.set('padding', options.padding || 0);
    this.set('visibility', options.visibility || true);
    this.set('children', options.children || []);
    this.set('dock', options.dock || null);

    this.items = this.children;
  },

  // reflow relative to parent element
  reflow: function() {
  },

  toObject: function() {
    return fabric.util.object.extend(this.callSuper('toObject'), {
      alignment: this.get('alignment'),
      margin: this.get('margin'),
      maxHeight: this.get('maxHeight'),
      maxWidth: this.get('maxWidth'),
      padding: this.get('padding'),
      visibility: this.get('visibility'),
      children: this.get('children'),
      dock: this.get('dock')
    });
  },

  _render: function(ctx) {
    this.callSuper('_render', ctx);

    // ctx.font = '20px Helvetica';
    // ctx.fillStyle = '#333';
    // ctx.fillText(this.label, -this.width/2, -this.height/2 + 20);
  }
});

import fabric from 'fabric';
import LabeledRect from './labeled_rect';

export default fabric.util.createClass(LabeledRect, {
  type: 'button',

  initialize: function(options) {
    options || (options = { });
    this.callSuper('initialize', options);
    this.set('label', options.label || '');
  },

  toObject: function() {
    return fabric.util.object.extend(this.callSuper('toObject'), {
    });
  },

  _render: function(ctx) {
    this.callSuper('_render', ctx);
  }
});

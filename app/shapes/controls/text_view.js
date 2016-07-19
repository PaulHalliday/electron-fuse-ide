import fabric from 'fabric';
import TxtInputControl from './txt_input_ctrl';

// Abstract control element that can have child elements
export default fabric.util.createClass(TxtInputControl, {

  type: 'fuse.textView',

  initialize: function(options) {
    options || (options = { });

    this.callSuper('initialize', options);
  },

  toObject: function() {
    return fabric.util.object.extend(this.callSuper('toObject'), {
    });
  },

  _render: function(ctx) {
    this.callSuper('_render', ctx);
  }
});

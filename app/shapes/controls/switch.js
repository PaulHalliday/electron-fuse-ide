import fabric from 'fabric';
import Panel from '../layout/panel';

// Abstract control element that can have child elements
export default fabric.util.createClass(Panel, {

  type: 'fuse.switch',

  initialize: function(options) {
    options || (options = { });

    this.callSuper('initialize', options);
    this.set('value', options.value || 0);
  },

  toObject: function() {
    return fabric.util.object.extend(this.callSuper('toObject'), {
    });
  },

  _render: function(ctx) {
    this.callSuper('_render', ctx);
  }
});

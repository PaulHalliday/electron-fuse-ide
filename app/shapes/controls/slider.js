import fabric from 'fabric';
import Panel from '../layout/panel';

// Abstract control element that can have child elements
export default fabric.util.createClass(Panel, {

  type: 'fuse.slider',

  initialize: function(options) {
    options || (options = { });

    this.callSuper('initialize', options);
    this.set('maximum', options.maximum || 0);
    this.set('minimum', options.minimum || 0);
    this.set('progress', options.progress || 0);
    this.set('relativeUserStep', options.relativeUserStep || 0);
    this.set('relativeValue', options.relativeValue || 0);
    this.set('userStep', options.userStep || 0);
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

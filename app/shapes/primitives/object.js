import fabric from 'fabric';
import Panel from '../layout/panel';

// http://jsfiddle.net/robhawkes/ghcjt/

export default fabric.util.createClass(Panel, {

  type: 'fuse.rectangle',

  initialize: function(options) {
    options || (options = { });

    this.callSuper('initialize', options);
    this.set('gradient', options.gradient || {});
  },

  toObject: function() {
    return fabric.util.object.extend(this.callSuper('toObject'), {
      gradient: this.get('gradient')
    });
  },

  _render: function(context) {
    this.callSuper('_render', context);

    // draw gradient
  }
});

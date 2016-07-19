import fabric from 'fabric';
import Panel from '../layout/panel';

// http://jsfiddle.net/robhawkes/ghcjt/

export default fabric.util.createClass(Panel, {

  type: 'fuse.rectangle',

  initialize: function(options) {
    options || (options = { });

    this.callSuper('initialize', options);
    this.set('cRadius', options.cRadius || 0);
  },

  toObject: function() {
    return fabric.util.object.extend(this.callSuper('toObject'), {
      cornerRadius: this.get('cornerRadius')
    });
  },

  _render: function(context) {
    this.callSuper('_render', context);

    var cRadius = this.corneRadius;

    // Reference rectangle without rounding, for size comparison
    context.fillRect(this.left, this.top, this.width, this.height);

    // Set faux rounded corners
    context.lineJoin = 'round';
    context.lineWidth = cRadius;

    // Change origin and dimensions to match true size (a stroke makes the shape a bit larger)
    context.strokeRect(this.left + (cRadius/2), this.top + (cRadius/2), this.width - cRadius, this.height - cRadius);
    context.fillRect(this.left + (cRadius/2), this.top + (cRadius/2), this.width - cRadius, this.height - cRadius);
  }
});

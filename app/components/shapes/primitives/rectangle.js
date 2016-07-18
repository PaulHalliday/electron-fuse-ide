import fabric from 'fabric';
import Panel from '../layout/panel';

// http://jsfiddle.net/robhawkes/ghcjt/

export default fabric.util.createClass(Panel, {

  type: 'round.rectangle',

  initialize: function(options) {
    options || (options = { });

    this.callSuper('initialize', options);
    this.set('text', options.text || '');
  },

  toObject: function() {
    return fabric.util.object.extend(this.callSuper('toObject'), {
      label: this.get('text')
    });
  },

  _render: function(context) {
    this.callSuper('_render', context);

    var cornerRadius = 20;

    // Reference rectangle without rounding, for size comparison
    context.fillRect(200, 50, rectWidth, rectHeight);

    // Set faux rounded corners
    context.lineJoin = 'round';
    context.lineWidth = cornerRadius;

    // Change origin and dimensions to match true size (a stroke makes the shape a bit larger)
    context.strokeRect(rectX+(cornerRadius/2), rectY+(cornerRadius/2), rectWidth-cornerRadius, rectHeight-cornerRadius);
    context.fillRect(rectX+(cornerRadius/2), rectY+(cornerRadius/2), rectWidth-cornerRadius, rectHeight-cornerRadius);
  }
});

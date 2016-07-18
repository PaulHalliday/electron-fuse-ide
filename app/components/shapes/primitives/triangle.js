import fabric from 'fabric';
import Panel from '../layout/panel';

// http://jsfiddle.net/robhawkes/ghcjt/

export default fabric.util.createClass(fabric.Rect, {

  type: 'round.triangle',

  initialize: function(options) {
    options || (options = { });

    this.callSuper('initialize', options);
    this.set('cornerRadius', options.cornerRadius || 10);
  },

  toObject: function() {
    return fabric.util.object.extend(this.callSuper('toObject'), {
      cornerRadius: this.get('cornerRadius')
    });
  },

  _render: function(context) {
    this.callSuper('_render', context);

    var cornerRadius = this.cornerRadius;
    // Set faux rounded corners
    context.lineJoin = 'round';
    context.lineWidth = cornerRadius;

    // You can do the same thing with paths, like this triangle
    // Remember that a stroke will make the shape a bit larger so you'll need to fiddle with the
    // coordinates to get the correct dimensions.

    var leftCorner = {
      x: this.left,
      y: this.top + this.height
    }

    var rightCorner = {
      x: this.right,
      y: this.top + this.height
    }

    var top = {
      x: this.right + (this.width / 2),
      y: this.top
    }

    context.beginPath();
    context.moveTo(leftCorner.x, leftCorner.y);
    context.lineTo(top.x, top.y);
    context.lineTo(rightCorner.x, rightCorner.y);
    context.closePath();
    context.stroke();
    context.fill();
  }
});

import fabric from 'fabric';
import Panel from './Panel';

export default fabric.util.createClass(Panel, {

  type: 'stack.panel',

  initialize: function(options) {
    options || (options = {
      originY: 'top',
      originX: 'center'
    });

    this.callSuper('initialize', options);
    this.set('orientation', options.orientation || 'Horizontal');
    this.set('spacing', options.spacing || 2);
  },

  toObject: function() {
    return fabric.util.object.extend(this.callSuper('toObject'), {
      orientation: this.get('orientation'),
      spacing: this.get('spacing')
    });
  },

  _render: function(ctx) {
    this.callSuper('_render', ctx);
    new fabric.Group(this.stackItems);
  }

  // http://fabricjs.com/fabric-intro-part-3#groups
  // originX: left/center/right
  // originY: top/bottom/center
  _arrangeChildren: function() {
    var lastItem = {
      top: this.margin
      left: this.margin
    };

    // make sure all items have same origin strategy
    for (let item of this.children) {
      item.originX = this.originX;
      item.originY = this.originY;

      // space items relatively according to last item and container rules:
      if (this.orientation == 'Horizontal') {
          item.left = lastItem.left + lastItem.width + this.spacing + item.margin;
      } else {
        item.top = lastItem.top + lastItem.height + this.spacing + item.margin;
      }

      if (item.left + item.width > this.left + this.maxWidth) {
        item.left = lastItem.left
      }

      if (item.top + item.height > this.top + this.height) {
        item.top = lastItem.top
      }
    }
  }
});

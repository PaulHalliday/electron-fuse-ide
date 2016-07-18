import fabric from 'fabric';
import Panel from './Panel';

export default fabric.util.createClass(Panel, {

  type: 'wrap.panel',

  initialize: function(options) {
    options || (options = {
      originY: 'top',
      originX: 'center'
    });

    this.callSuper('initialize', options);
    this.set('flowDirection', options.flowDirection || 'LeftToRight'); // RightToLeft
    this.set('spacing', options.spacing || 0);
    this.set('orientation', options.orientation || 'Horizontal');
    this.set('itemHeight', options.itemHeight || 40);
    this.set('itemWidth', options.itemWidth || 80);
  },

  toObject: function() {
    return fabric.util.object.extend(this.callSuper('toObject'), {
      orientation: this.get('orientation'),
      spacing: this.get('spacing')
      flowDirection: this.get('flowDirection'),
      itemHeight: this.get('itemHeight')
      itemWidth: this.get('itemWidth'),
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
        // wrap instead
        if (this.flowDirection === 'RightToLeft') {

        }

        if (this.flowDirection === 'LeftToRight') {

        }
      }

      if (item.top + item.height > this.top + this.height) {
        // wrap instead
        if (this.flowDirection === 'RightToLeft') {

        }

        if (this.flowDirection === 'LeftToRight') {

        }
      }
    }
  }
});

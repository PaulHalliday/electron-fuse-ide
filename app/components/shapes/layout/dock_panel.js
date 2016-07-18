import fabric from 'fabric';
import Panel from './Panel';

export default fabric.util.createClass(Panel, {

  type: 'dock.panel',

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
    new fabric.Group(this.children);
  }

  // http://fabricjs.com/fabric-intro-part-3#groups
  // originX: left/center/right
  // originY: top/bottom/center
  _arrangeItems: function() {
    this.docked = {
      left: [],
      right: [],
      top: [],
      bottom: [],
      fill: []
    }

    // make sure all items have same origin strategy
    for (let item of this.children) {
      item.originX = this.originX;
      item.originY = this.originY;

      var direction = item.dock;

      if (direction) {
        docked[direction] = item;

        switch (direction) {
          case 'fill':
            item.originX = 'center';
            item.originY = 'center';
            item.width = this.width;
            item.height = this.height;
            break;
          default:
            item.originX = direction;
        }
      }

      item.parent = this;
      item.reflow();
    }
  }
});

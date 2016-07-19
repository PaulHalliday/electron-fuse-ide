import fabric from 'fabric';
import Element from './Element';

export default fabric.util.createClass(Element, {
  type: 'panel',

  initialize: function(options) {
    options || (options = {
      originY: 'top',
      originX: 'center'
    });

    this.callSuper('initialize', options);
    this.set('grid', options.grid || {});
    this.set('navigation', options.navigation || {});
    this.set('background', options.background || {});
    this.set('color', options.color || {});
  },

  toObject: function() {
    return fabric.util.object.extend(this.callSuper('toObject'), {
      navigation: this.get('navigation'),
      grid: this.get('grid'),
      background: this.get('background'),
      color: this.get('color')
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
    for (let item of this.children) {
      item.originX = this.originX;
      item.originY = this.originY;
    }
  }
});

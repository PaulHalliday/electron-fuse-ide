// http://stackoverflow.com/questions/14139724/how-to-insert-a-scrollview-container-in-canvas
// Superimpose a second canvas over the top of your original canvas and use CSS z-index to sort out which one is on top of the other. Then just use the clip method on the scroll view canvas.

import fabric from 'fabric';
import Panel from '../controls/ContentControl';

export default fabric.util.createClass(ContentControl, {

  type: 'stack.panel',

  initialize: function(options) {
    options || (options = {
      originY: 'top',
      originX: 'center'
    });

    this.callSuper('initialize', options);
    this.set('scrollPosition', options.scrollPosition || 0);
    this.set('allowedScrollDirections ', options.allowedScrollDirections  || 'Vertical'); // Horizontal
  },

  toObject: function() {
    return fabric.util.object.extend(this.callSuper('toObject'), {
      scrollPosition: this.get('scrollPosition'),
      allowedScrollDirections: this.get('allowedScrollDirections')
    });
  },

  _render: function(ctx) {
    this.callSuper('_render', ctx);
    new fabric.Group(this.children);
  }

  // http://fabricjs.com/fabric-intro-part-3#groups
  // originX: left/center/right
  // originY: top/bottom/center
  _arrangeChildren: function() {

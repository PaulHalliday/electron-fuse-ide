import fabric from 'fabric';
import Panel from '../layout/panel';

// http://jsfiddle.net/robhawkes/ghcjt/

export default fabric.util.createClass(fabric.Rect, {

  type: 'fuse.video',

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

    // http://html5doctor.com/video-canvas-magic/
    // http://chimera.labs.oreilly.com/books/1234000001654/ch06.html

    // display video on canvas
    // videoElement = document.createElement("video");
    // videoDiv = document.createElement('div');
    // document.body.appendChild(videoDiv);
    // videoDiv.appendChild(videoElement);
  }
});

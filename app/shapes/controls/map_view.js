import fabric from 'fabric';
import Panel from '../layout/panel';

// Abstract control element that can have child elements
export default fabric.util.createClass(Panel, {

  type: 'mapView',

  initialize: function(options) {
    options || (options = { });

    this.callSuper('initialize', options);
    this.set('bearing', options.bearing || 0);
    this.set('latitude', options.latitude || 0);
    this.set('longitude', options.longitude || 0);
    this.set('showCompass', options.showCompass || false);
    this.set('showMyLocation', options.showMyLocation || false);
    this.set('tilt', options.tilt || 0);
    this.set('zoom', options.zoom || 0);
  },

  toObject: function() {
    return fabric.util.object.extend(this.callSuper('toObject'), {
    });
  },

  _render: function(ctx) {
    this.callSuper('_render', ctx);
  }
});

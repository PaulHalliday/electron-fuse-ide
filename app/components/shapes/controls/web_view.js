import fabric from 'fabric';
import Panel from '../layout/panel';

// Abstract control element that can have child elements
export default fabric.util.createClass(Panel, {

  type: 'webView',

  initialize: function(options) {
    options || (options = { });

    this.callSuper('initialize', options);
    this.set('file', options.file || null);
    this.set('baseUrl', options.baseUrl || null);
    this.set('url', options.url || null);
    this.set('htmlSource', options.htmlSource || null);
  },

  toObject: function() {
    return fabric.util.object.extend(this.callSuper('toObject'), {
    });
  },

  _render: function(ctx) {
    this.callSuper('_render', ctx);
  }
});

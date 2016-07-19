import fabric from 'fabric';
import Control from './control';

// Abstract control element that can have child elements
export default fabric.util.createClass(Control, {

  type: 'fuse.textInputCtrl',

  initialize: function(options) {
    options || (options = { });

    this.callSuper('initialize', options);
    this.set('actionStyle', options.actionStyle || 'Send');
    this.set('caretColor', options.caretColor || 'black');
    this.set('font', options.font || '');
    this.set('fontSize', options.fontSize || 12);
    this.set('isReadOnly', options.isReadOnly || false);
    this.set('lineSpacing', options.lineSpacing || 10);
    this.set('maxLength', options.maxLength || 10);
    this.set('placeHolderColor', options.placeHolderColor || 'black');
    this.set('placeHolderText', options.placeHolderText || 'hello world');
    this.set('selectionColor', options.selectionColor || 'silver');
    this.set('textAlignment', options.textAlignment || 'left');
    this.set('textColor', options.textColor || 'black');
    this.set('textWrapping', options.textWrapping || false);
    this.set('value', options.value || '');
  },

  toObject: function() {
    return fabric.util.object.extend(this.callSuper('toObject'), {
      actionStyle: this.get('actionStyle'),
      caretColor: this.get('caretColor')
      // ...
    });
  },

  _render: function(ctx) {
    this.callSuper('_render', ctx);
  }
});

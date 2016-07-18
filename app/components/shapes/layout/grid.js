import fabric from 'fabric';
import Panel from './Panel';

export default fabric.util.createClass(Element, {

  type: 'grid',

  initialize: function(options) {
    options || (options = {
      originY: 'top',
      originX: 'center'
    });

    this.callSuper('initialize', options);
    this.set('cellSpacing', options.cellSpacing || 0);
    this.set('columnCount', options.columnCount || 0);
    this.set('columns', options.columns || 0);
    this.set('contentAlignment', options.contentAlignment || 'center');
    this.set('defaultColumn', options.defaultColumn || 10);
    this.set('defaultRow', options.defaultRow || 10);
    this.set('rowCount', options.rowCount || 2);
    this.set('rows', options.rows || 2);
    this.set('background', options.background || null);
  },

  toObject: function() {
    return fabric.util.object.extend(this.callSuper('toObject'), {
      background: this.get('background'),
      cellSpacing: this.get('cellSpacing'),
      columnCount: this.get('columnCount'),
      defaultColumn: this.get('defaultColumn'),
      defaultRow: this.get('defaultRow'),
      columns: this.get('columns'),
      contentAlignment: this.get('contentAlignment'),
      rowCount: this.get('rowCount'),
      rows: this.get('rows'),
    });
  },

  _render: function(ctx) {
    this.callSuper('_render', ctx);
    new fabric.Group(this.items);
  }

  // http://fabricjs.com/fabric-intro-part-3#groups
  // originX: left/center/right
  // originY: top/bottom/center
  _arrangeItems: function() {
    // make sure all items have same origin strategy
    for (let item of this.items) {
    }
  }

  _arrangeRows: function() {
    if (!this.rows) {
      return;
    }
  }

  _arrangeColumns: function() {
    if (!this.columns) {
      return;
    }
  }
});

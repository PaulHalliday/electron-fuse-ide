class UndoAction {
  constructor(target) {
    this.target = target;
  }

  onClick(e) {
    this.ctx.actions.undo();
  }
}

class RedoAction extends Action {
  onClick(e) {
    this.ctx.actions.redo();
  }
}


var menus = {
  undo: {
    class: UndoAlign,
    icon: 'undo', // fa icon
  },
  left: {
    class: RedoAction,
    icon: 'redo', // fa icon
  }
}
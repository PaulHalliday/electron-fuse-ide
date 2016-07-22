class UndoAction {
  onSelect(e) {
    this.ctx.actions.undo();
  }
}

class RedoAction extends Action {
  onSelect(e) {
    this.ctx.actions.redo();
  }
}


export default {
  undo: {
    label: 'Undo',
    class: UndoAction,
    icon: 'undo' // fa icon
  },
  left: {
    label: 'Redo',
    class: RedoAction,
    icon: 'redo' // fa icon
  }
}
class Share extends Action {
  display() {
  }

  // TODO: do share
  onSelect(e) {
  }
}

class Export extends Action {
  display() {
  }

  // TODO: do export
  onSelect(e) {
  }
}


class Import extends Action {
  display() {
  }

  // TODO: do import
  onSelect(e) {

  }
}


// should be callable on any UI Component
export default {
  share: {
    label: 'Share',
    class: Share,
    icon: 'cloud' // fa icon
  },
  export: {
    label: 'Export',
    class: Export,
    icon: 'upload' // fa icon
  },
  import: {
    label: 'Import',
    class: Import,
    icon: 'import' // fa icon
  }
}

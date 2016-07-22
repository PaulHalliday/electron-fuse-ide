class Alignment extends Property {
  setAlign(align) {
    this.setProperty({alignment: align});
  }
}

class LeftAlign extends Alignment {
  onSelect(e) {
    this.setAlign('left'});
  }
}

class CenterAlign extends Alignment {
  onSelect(e) {
    this.setAlign('center'});
  }
}

class RightAlign extends Alignment {
  onSelect(e) {
    this.setAlign('right'});
  }
}


export default {
  alignLeft: {
    class: LeftAlign,
    icon: 'align-left', // fa icon
  },
  alignCenter: {
    class: CenterAlign,
    icon: 'align-center', // fa icon
  },
  alignRight: {
    class: RightAlign,
    icon: 'align-right', // fa icon

  }
}

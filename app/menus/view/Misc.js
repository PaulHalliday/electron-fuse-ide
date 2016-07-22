// allow add/remove of tags
class SetTags {
  constructor(target) {
    this.target = target;
  }

  display() {
    // display current tags
  }

  onSelect(e) {
    // tags is a Set
    target.setTag(e.value);
  }

  onSelectMany(e) {
    // tags is a Set
    target.setTags(e.value);
  }
}

class Misc {

}

export default {
  label: 'Misc.'
  class: Misc,
  icon: 'misc',
  menus: {
    tags: {
      label: 'tags',
      class: SetTags,
      icon: 'tags' // fa icon
    }
  }
}

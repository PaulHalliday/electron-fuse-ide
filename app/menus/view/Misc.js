// allow add/remove of tags
class SetTags {
  constructor(target) {
    this.target = target;
  }

  onClick(e) {
    // tags is a Set
    target.setTag(e.value);
  }
}

var menus = {
  tag: {
    class: SetTags,
    icon: 'tags', // fa icon
  }
}

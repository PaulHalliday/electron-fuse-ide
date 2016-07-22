import SetKidPosition from './SetKidPosition'
ViewMenu from './ViewMenu';

class Reorder {

}

var reorder = {
  label: 'Reorder',
  class: Reorder,
  icon: 'reorder'
  menus: SetKidPosition
}

var menus = {
    menus: {
      settings: ViewMenu, // common control settings
      addView: addView,
      layout: layout,
      reorder: reorder
    }
}

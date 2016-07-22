import SetKidPosition from './SetKidPosition'

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
      settings: settings, // common control settings
      addView: addView,
      layout: layout,
      reorder: reorder
    }
}

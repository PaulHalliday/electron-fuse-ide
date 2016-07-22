import SetKidPosition from './SetKidPosition'
import View from '../view';

class Reorder {

}

var reorder = {
  label: 'Reorder',
  class: Reorder,
  icon: 'reorder'
  menus: SetKidPosition
}

var menus = {
  label: 'Composite',
  class: CompositeView,
  icon: 'composite',
  menus: {
    view: View.menus, // common control settings
    addView: addView,
    layout: layout,
    reorder: reorder
  }
}

import View from '../view';
import Layout from './Layout';
import AddView from './AddView';

class Reorder {

}

var reorder = {
  label: 'Reorder',
  class: Reorder,
  icon: 'reorder'
}

var menus = {
  label: 'Composite',
  class: CompositeView,
  icon: 'composite',
  menus: {
    view: View.menus, // common control settings
    addView: AddView,
    layout: Layout,
    reorder: reorder
  }
}

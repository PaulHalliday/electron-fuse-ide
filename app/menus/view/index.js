import ClipBoardActions from './ClipBoardActions';
import Misc from './Misc';
import SetColor from './SetColor';

// turn a widget into a Template
class Template {

}

export default {
  label: 'View',
  class: ViewMenu,
  icon: 'view',
  menus: {
    ClipBoardActions: ClipBoardActions,
    Misc: Misc,
    SetColor: SetColor,
    Template: Template
  }
}
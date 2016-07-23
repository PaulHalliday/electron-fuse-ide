import Composite from './composite';
import View from './view';
import Canvas from './canvas';
import Serialize from './serialize';
import Text from './text';
import Controls from './controls';

export default {
  // when you click on a composite view
  compositeView: Composite,
  // when you click on a single leaf view
  controls: Controls,
  view: View,
  text: Text,
  canvas: Canvas,
  serialize: Serialize
}

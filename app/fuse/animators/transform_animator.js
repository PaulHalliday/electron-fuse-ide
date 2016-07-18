import TrackAnimator from './TrackAnimator';

export default class TransformAnimator extends TrackAnimator {
  constructor(options = {}) {
    this.x = options.x || 0;
    this.y = options.y || 0;
    this.z = options.z || 0;
    this.target = options.target;
    this.priority = options.priority || 1;
    this.relativeNode = options.relativeNode;
  }
}

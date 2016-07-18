import TrackAnimator from './TrackAnimator';

export default class ChangeAnimator extends TransformAnimator {
  constructor(options = {}) {
    this.value = options.value || 0;
    this.degrees = options.degrees || {x: 0, y: 0, z: 0};
    this.relativeNode = options.relativeNode;
  }
}

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Canvas.css';
import { fabric } from 'fabric';
import autobind from 'autobind-decorator';

// Panel of drawing objects
class ObjectPanel extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <div id="objectSelectorPanel">
      </div>
      );
  }
}

export default ObjectSelectorPanel;

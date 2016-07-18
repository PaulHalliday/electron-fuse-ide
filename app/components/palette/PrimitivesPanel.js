import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Canvas.css';
import { fabric } from 'fabric';
import autobind from 'autobind-decorator';

class PrimitivesPanel extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <div id="objectSelectorPanel" name="primitives">
        <ObjectSelector name="rectangle" />
        <ObjectSelector name="circle" />
        <ObjectSelector name="text" />
        <ObjectSelector name="image" />
        <ObjectSelector name="video" />
      </div>
      );
  }
}

export default ObjectSelectorPanel;

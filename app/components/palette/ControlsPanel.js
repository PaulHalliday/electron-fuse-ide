import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Canvas.css';
import { fabric } from 'fabric';
import autobind from 'autobind-decorator';

class ControlsPanel extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <div id="controlsSelectorPanel" name="layouts">
        <ObjectSelector name="button" />
        <ObjectSelector name="textInput" />
        <ObjectSelector name="textView" />
        <ObjectSelector name="slider" />
        <ObjectSelector name="switch" />
        <ObjectSelector name="mapView" />
        <ObjectSelector name="webView" />
        <ObjectSelector name="graphicsView" />
      </div>
      );
  }
}

export default ObjectSelectorPanel;

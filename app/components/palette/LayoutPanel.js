import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Canvas.css';
import { fabric } from 'fabric';
import autobind from 'autobind-decorator';

class LayoutPanel extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <div id="layoutSelectorPanel" name="layouts">
        <ObjectSelector name="panel" />
        <ObjectSelector name="stackPanel" />
        <ObjectSelector name="dockPanel" />
        <ObjectSelector name="grid" />
        <ObjectSelector name="wrapPanel" />
        <ObjectSelector name="columnLayout" />
        <ObjectSelector name="circleLayout" />
        <ObjectSelector name="scrollView" />
      </div>
      );
  }
}

export default ObjectSelectorPanel;

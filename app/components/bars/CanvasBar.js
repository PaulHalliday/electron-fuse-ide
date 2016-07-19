import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Toolbar.css';

export default class CanvasBar extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          // settings for Canvas, such as zoom lv etc
          // also enable/disable grid
        </div>
      </div>
    );
  }
}

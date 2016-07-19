import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Toolbar.css';


export default class DrawingPane extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          // contains Canvas
        </div>
      </div>
    );
  }
}

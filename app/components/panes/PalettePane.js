import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Toolbar.css';


export default class PalettePane extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          // panels for each type of Canvas object
          // allow expand/collapse using Bootstrap accordion
        </div>
      </div>
    );
  }
}

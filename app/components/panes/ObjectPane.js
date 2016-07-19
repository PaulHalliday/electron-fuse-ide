import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Toolbar.css';


export default class ObjectPane extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          // scroll view of objects in a list
          // includes search to find named object or sort by type etc.
        </div>
      </div>
    );
  }
}

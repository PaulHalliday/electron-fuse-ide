import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Toolbar.css';


export default class HierarchyPane extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          // scroll view of components in a tree
          // arrange objects in parent/child relationships
          // include immeditate export of branch or leaf in tree
        </div>
      </div>
    );
  }
}

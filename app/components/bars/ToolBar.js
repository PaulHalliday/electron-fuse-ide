import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Toolbar.css';


export default class Toolbar extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          // alignment
          <div className={styles.container}>
            <button>Left</button>
            <button>Center</button>
            <button>Right</button>
          </div>
          // layering
          <div className={styles.container}>
            <button>Back</button>
            <button>Forward</button>
            <button>To back</button>
            <button>To front</button>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component, PropTypes } from 'react';
import autobind from 'autobind-decorator';
import PrimitiveControl from './PrimitiveControl';

export default class TextControl extends PrimitiveControl {
  componentDidMount() {
    this.updateCanvas();
  }

  componentDidUpdate() {
    this.updateCanvas();
  }

  updateCanvas() {
  }
  
  render() {
    return (
      <canvas ref={(ref) => this.canvas = ref} width={100} height={100}/>
    );
  }
}

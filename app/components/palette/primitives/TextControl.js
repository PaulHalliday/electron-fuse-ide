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
    const ctx = this.canvas.getContext('2d');
    ctx.font = '14px Arial';
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    ctx.font = "14px Arial";
    ctx.textAlign= 'center';
    ctx.fillText('Hello World', x, y);
  }
  render() {
    return (
      <canvas ref={(ref) => this.canvas = ref} width={100} height={100}/>
    );
  }
}

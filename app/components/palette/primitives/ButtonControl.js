import React, { Component, PropTypes } from 'react';
import autobind from 'autobind-decorator';
import PrimitiveControl from './PrimitiveControl';

import roundedRectangle from 'canvas-rounded-rectangle';

const style = {
    top: 60,
    left: 80,
    width: 100,
    height: 50,
    stroke: '#3333ff',
    fill: '#fffaaa',
    borderRadius: 5,
    strokeWidth: 2,
    hover: {
        stroke: '#ff3333'
    }
}

export default class ButtonControl extends PrimitiveControl {
  updateCanvas() {
    const ctx = this.canvas.getContext('2d');
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var width = 50;
    var height = 20;

    const path = roundedRectangle(style);
    ctx.lineWidth = style.strokeWidth;
    ctx.strokeStyle = style.stroke;
    ctx.fill = style.fill;
    ctx.fill(path);
    ctx.stroke(path);

    ctx.font = '14px Arial';
    ctx.font = "14px Arial";
    ctx.textAlign= 'center';

    ctx.fillText('Push', x, y);
  }
  render() {
    return (
      <canvas ref={(ref) => this.canvas = ref} width={100} height={100}/>
    );
  }
}

import React, { Component, PropTypes } from 'react';
import autobind from 'autobind-decorator';
import PrimitiveControl from './PrimitiveControl';

export default class ButtonControl extends PrimitiveControl {
  updateCanvas() {
    const ctx = this.canvas.getContext('2d');
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var width = 50;
    var height = 20;

    ctx.fillRect(x - width/2, y - height/2, x + width/2, y + height/2);

    ctx.font = '14px Arial';
    ctx.font = "14px Arial";
    ctx.textAlign= 'center';
    ctx.fillText('Press me', x, y);
  }
  render() {
    return (
      <canvas ref={(ref) => this.canvas = ref} width={100} height={100}/>
    );
  }
}

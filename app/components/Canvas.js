import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Canvas.css';
import { fabric } from 'fabric';
import autobind from 'autobind-decorator';

console.log('styles', styles);

class Canvas extends Component {
  static propTypes = {
  };

  state = {
    startX: 0,
    startY: 0,
    selectX: '',
    selectY: '',
    color: '#f00',
    rectangles: []
  }

  constructor() {
    super();
  }

  @autobind
  _setColor(e) {
    this.setState({
      color: e.target.value
    })
  }

  @autobind
  _setSelectX(e) {
    this.setState({
      selectX: e.target.value
    })
  }

  @autobind
  _setSelectY(e) {
    this.setState({
      selectY: e.target.value
    })
  }

  @autobind
  _addRect() {
    console.log('Add rect', this.state.rectangles.length);
    this.state.rectangles.push(this._newRectangle(this.state.rectangles.length));

    this.rectangles = this.state.rectangles.slice();

    this.setState({rectangles: this.rectangles})
    console.log('rects', this.state.rectangles.length);
    this._draw();
  }

  @autobind
  _newRectangle(index) {
    return {
      index: index,
      left: this.state.startX || 100,
      top: this.state.startY || 100,
      fill: this.state.color || 'red',
      width: 60,
      height: 60
    };
  }

  @autobind
  _updateRectangle(obj) {
    var index = obj.index;
    console.log('updateRectangle', obj);
    if (!this.rectangles[index]) {
      console.log('no such rectangle', index);
      return;
    }
    this.rectangles[index].left = obj.left;
    this.rectangles[index].top = obj.top;
    console.log('updated rectangles', this.rectangles);
    this.setState({rectangles: this.rectangles})
    // this._draw();
  }

  @autobind
  _draw() {
    this.screen = new fabric.Canvas('screen');
    console.log('Draw', this.state.rectangles.length);

    for (let rectObj of this.state.rectangles) {
      this._drawRect(rectObj);
    }
  }

  _drawRect(rectObj) {
    console.log('Rect obj', rectObj);
    var rect = new fabric.Rect(rectObj);
    console.log('new rectangle', rect);

    rect.on('selected', () => {
      console.log('selected rectangle', rect.index);
    });

    rect.on('modified', () => {
      console.log('modified:', rect);
      this._updateRectangle(rect);
    });

    rect.on('moving', () => {
      console.log('moving:', rect);
      this.setState({
        selectX: rect.left,
        selectY: rect.top
      });
    });

    // "add" rectangle onto canvas
    this.screen.add(rect);
  }

  render() {
    return (
      <div>
        <div className={styles.backButton}>
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div>
          <label for="x">X:</label>
          <input id="x" type="text" value={this.state.selectX} onChange={this._setSelectX} />
          <label for="y">Y</label>
          <input id="y" type="text" value={this.state.selectY} onChange={this._setSelectY} />
          <input
             type="button"
             value="Add Rectangle"
             onClick={this._addRect}
           />
           <input id="color"
              type="text"
              value={this.state.color}
              onChange={this._setColor}
            />
        </div>
        <div>
          <canvas id="screen" width="400" height="400" ></canvas>
        </div>
      </div>
    );
  }
}

// style={styles.canvas}
// style={styles.toolBar}
//  style={styles.main}

export default Canvas;

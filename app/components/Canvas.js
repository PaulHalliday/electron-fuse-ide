import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Canvas.css';
import { fabric } from 'fabric';
import autobind from 'autobind-decorator';

class Canvas extends Component {
  static propTypes = {
  };

  state = {
    start: {
      {
        left: 0,
        top: 0,
        radius: 40,
        angle: 0
      }
    },

    selected: {
      left: '',
      top: '',
      stroke: '',
      strokeWidth: '',
      fill: '',
      radius: '',
      angle: '',
    },

    current: {
      shape: 'rectangle',
    }
  }

  constructor() {
    super();
  }

  @radius
  _setRadius(e) {
    this.setState({
      radius: e.target.value
    })
    this.currentObj.set({
      radius: e.target.value
    });
    this.screen.renderAll();
  }

  @autobind
  _setFill(e) {
    this.setState({
      fill: e.target.value
    })
    this.currentObj.set({
      fill: e.target.value
    });
    this.screen.renderAll();
  }

  @autobind
  _setStroke(e) {
    this.setState({
      color: e.target.value
    })
    this.currentObj.set({fill: e.target.value});
    this.screen.renderAll();
  }

  @autobind
  _setStrokeWidth(e) {
    this.setState({
      strokeWidth: e.target.value
    })
    this.currentObj.set({
      strokeWidth: e.target.value
    });
    this.screen.renderAll();
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
    this._drawRect(this._newRectangle);
  }

  @autobind
  _addCircle() {
    this._drawCircle(this._newCircle);
  }

  @autobind
  _addTriangle() {
    this._drawTriangle(this._newTriangle);
  }

  @autobind
  _addEllipse() {
    this._drawEllipse(this._newEllipse);
  }

  @autobind
  _addImage() {
    this._drawImage(this._newImage);
  }

  @autobind
  _addText() {
    this._drawText(this._newText);
  }


  @autobind
  get _newRectangle() {
    return {
      left: this.state.startX || 100,
      top: this.state.startY || 100,
      width: this.state.width || 60,
      height: this.state.height || 60,

      opacity: this.state.opacity || 1,
      stroke: this.state.stroke || 'black',
      strokeWidth: this.state.strokeWidth || 1,
      fill: this.state.color || 'red',
      backgroundColor: this.state.backgroundColor || '',

      scaleX: this.state.scaleX || 1,
      scaleY: this.state.scaleY || 1,
      angle: this.state.angle || 0,
      flipX: this.state.flipX || false,
      flipY: this.state.flipY || false,
    };
  }

  get _newCircle() {
    return {
      left: this.state.startX || 100,
      top: this.state.startY || 100,
      radius: this.state.radius || 60

      opacity: this.state.opacity || 1,
      stroke: this.state.stroke || 'black',
      strokeWidth: this.state.strokeWidth || 1,
      fill: this.state.color || 'red',
      backgroundColor: this.state.backgroundColor || '',

      scaleX: this.state.scaleX || 1,
      scaleY: this.state.scaleY || 1,
      angle: this.state.angle || 0,
      flipX: this.state.flipX || false,
      flipY: this.state.flipY || false,
    };
  }

  @autobind
  get _newPolyline() {
    return {
      left: this.state.startX || 100,
      top: this.state.startY || 100,
      width: this.state.width || 60,
      height: this.state.height || 60,
      points: [],

      opacity: this.state.opacity || 1,
      stroke: this.state.stroke || 'black',
      strokeWidth: this.state.strokeWidth || 1,
      fill: this.state.color || 'red',
      backgroundColor: this.state.backgroundColor || '',

      scaleX: this.state.scaleX || 1,
      scaleY: this.state.scaleY || 1,
      angle: this.state.angle || 0,
      flipX: this.state.flipX || false,
      flipY: this.state.flipY || false,
    };
  }

  @autobind
  get _newText() {
    return {
      left: this.state.startX || 100,
      top: this.state.startY || 100,
      width: this.state.width || 60,
      height: this.state.height || 60,

      opacity: this.state.opacity || 1,
      stroke: this.state.stroke || 'black',
      strokeWidth: this.state.strokeWidth || 1,
      fill: this.state.color || 'red',
      backgroundColor: this.state.backgroundColor || '',

      scaleX: this.state.scaleX || 1,
      scaleY: this.state.scaleY || 1,
      angle: this.state.angle || 0,
      flipX: this.state.flipX || false,
      flipY: this.state.flipY || false,
    };
  }

  get canvasSettings() {
    return {
      backgroundColor: 'rgb(100,100,200)',
      selectionColor: 'blue',
      selectionLineWidth: 2
      // ...
    }
  }

  // canvas.getObjects();
  // canvas.item(0);
  // canvas.remove(rect);
  // canvas.selection = false; // disable group selection
  // rect.set('selectable', false); // make object unselectable

  // var circle = new fabric.Circle({
  //   left: 100,
  //   top: 100,
  //   radius: 50
  // });

  // Image
  // fabric.Image.fromURL('my_image.png', function(oImg) {
  //   canvas.add(oImg);
  // });

  // Path
  // var path = new fabric.Path('M 0 0 L 200 100 L 170 200 z');
  // path.set({ left: 120, top: 120 });
  // path.set({ fill: 'red', stroke: 'green', opacity: 0.5 });
  // canvas.add(path);

  // Text
  // var text = new fabric.Text('hello world', { left: 100, top: 100 });
  // canvas.add(text);

  // Fonts
  // var comicSansText = new fabric.Text("I'm in Comic Sans", {
  //   fontFamily: 'Comic Sans',
  //   fontSize: 40,
  //   fontWeight: 'bold',
  //   textDecoration: 'underline',
  //   shadow: 'green -5px -5px 3px'
  //   fontStyle: 'italic',
  //   stroke: '#c3bfbf',
  //   strokeWidth: 3
  //   textAlign: 'right',
  //   lineHeight: 3
  //   textBackgroundColor: 'rgb(0,200,0)'
  // });

  @autobind
  _drawRect(obj) {
    this.screen = this.screen || new fabric.Canvas('screen', this.canvasSettings);

    this.rects = this.rects || [];

    let shape = new fabric.Rect(obj);
    this._addEvents(shape);

    // "add" rectangle onto canvas
    this.currentObj = shape;
    this.rects.push(shape);
    this.screen.add(shape);
  }

  @autobind
  _drawCircle(obj) {
    this.screen = this.screen || new fabric.Canvas('screen', this.canvasSettings);

    this.circles = this.circles || [];

    let shape = new fabric.Circle(obj);
    this._addEvents(shape);

    // "add" rectangle onto canvas
    this.currentObj = shape;
    this.circles.push(shape);
    this.screen.add(shape);
  }

  @autobind
  _drawTriangle(obj) {
    this.screen = this.screen || new fabric.Canvas('screen', this.canvasSettings);

    this.triangles = this.triangles || [];

    let shape = new fabric.Circle(obj);
    this._addEvents(shape);

    // "add" rectangle onto canvas
    this.currentObj = shape;
    this.circles.push(shape);
    this.screen.add(shape);
  }

  @autobind
  _drawText(obj) {
    this.screen = this.screen || new fabric.Canvas('screen', this.canvasSettings);

    this.texts = this.texts || [];

    let shape = new fabric.Text(obj);
    this._addEvents(shape);

    // "add" rectangle onto canvas
    this.currentObj = shape;
    this.texts.push(shape);
    this.screen.add(shape);
  }

  @autobind
  _drawImage(obj) {
    this.screen = this.screen || new fabric.Canvas('screen', this.canvasSettings);

    this.images = this.images || [];

    let shape = new fabric.Image(obj);
    this._addEvents(shape);

    // "add" rectangle onto canvas
    this.currentObj = shape;
    this.images.push(shape);
    this.screen.add(shape);
  }

  // group.item(0).setFill('red');
  // group.item(1).set({
  //   text: 'trololo',
  //   fill: 'white'
  // });

 //  if you'd like to create a group with objects that are already present on canvas, you'll need to clone them first:
 //
 // // create a group with copies of existing (2) objects
 // var group = new fabric.Group([
 //   canvas.item(0).clone(),
 //   canvas.item(1).clone()
 // ]);
 //
 // // remove all objects and re-render
 // canvas.clear().renderAll();
 //
 // // add group onto canvas
 // canvas.add(group);

 // Serialize!
 // The backbone of canvas serialization in Fabric is fabric.Canvas#toObject() and fabric.Canvas#toJSON() methods.

 // JSON.stringify(canvas);
 // canvas.toObject()
 // canvas.toSVG()

// canvas.loadFromJSON(

  @autobind
  _group(shapesList, obj) {
    var group = new fabric.Group(shapesList, obj);
    this.screen.add(group);
  }


  _addEvents(shape) {
    shape.on('selected', () => {
      console.log('selected rectangle', shape);
      this.currentObj = shape;
    });

    shape.on('modified', () => {
      console.log('modified:', shape);
    });

    shape.on('moving', () => {
      console.log('moving:', shape);
      this.setState({
        selectX: shape.left,
        selectY: shape.top
      });
    });
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
          <label htmlFor="x">X:</label>
          <input id="x" type="text" value={this.state.selectX} onChange={this._setSelectX} />
          <label htmlFor="y">Y</label>
          <input id="y" type="text" value={this.state.selectY} onChange={this._setSelectY} />

          <input
            type="button"
            value="Rectangle"
            onClick={this._addRect}
          />
          <input
            type="button"
            value="Circle"
            onClick={this._addCircle}
          />
          <input
            type="button"
            value="Ellipse"
            onClick={this._addEllipse}
          />
          <input
            type="button"
            value="Image"
            onClick={this._addImage}
          />
          <label htmlFor="x">X:</label>
          <input id="color"
            type="text"
            value={this.state.color}
            onChange={this._setColor}
          />
          <input id="angle"
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

import React, { Component } from "react";
import './Toolbar.css';

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded : false
    }
  }
  render() {
    return (
      <nav className={'toolbar' + (this.state.isExpanded ? ' expanded' : '') }>
        <button className="btn-tgl" onClick={function(e){
          this.setState({isExpanded: !this.state.isExpanded})
        }.bind(this)}><i className="fas fa-backward"></i><span className="blind">펼치기</span></button>
        <ul className="lst">
          <li className="on">
            <button className="bt active"><i className="fas fa-arrows-alt"></i><span className="tx">Move Tool</span></button>
            <button className="bt"><i className="fas fa-file"></i><span className="tx">Artboard Tool</span></button>
          </li>
          <li>
            <button className="bt"><i className="fas fa-border-none"></i><span className="tx">Rectangular Marquee Tool</span></button>
            <button className="bt active"><i className="fas fa-border-none"></i><span className="tx">Elliptical Marquee Tool</span></button>
            <button className="bt"><i className="fas fa-border-none"></i><span className="tx">Single Row Marquee Tool</span></button>
            <button className="bt"><i className="fas fa-border-none"></i><span className="tx">Single Column Marquee Tool</span></button>
          </li>
          <li>
            <button className="bt active"><i className="fas fa-bullseye"></i><span className="tx">Lasso Tool</span></button>
            <button className="bt"><i className="fas fa-bullseye"></i><span className="tx">Polygonal Lasso Tool</span></button>
            <button className="bt"><i className="fas fa-bullseye"></i><span className="tx">Magnetic Lasso Tool</span></button>
          </li>
          <li>
            <button className="bt active"><i className="fas fa-location-arrow"></i><span className="tx">Object Selection Tool</span></button>
            <button className="bt"><i className="fas fa-location-arrow"></i><span className="tx">Quick Selection Tool</span></button>
            <button className="bt"><i className="fas fa-location-arrow"></i><span className="tx">Magic Wand Tool</span></button>
          </li>
          <li>
            <button className="bt active"><i className="fas fa-crop-alt"></i><span className="tx">Crop Tool</span></button>
            <button className="bt"><i className="fas fa-crop-alt"></i><span className="tx">Perspective Crop Tool</span></button>
            <button className="bt"><i className="fas fa-crop-alt"></i><span className="tx">Slice Tool</span></button>
            <button className="bt"><i className="fas fa-crop-alt"></i><span className="tx">Slice Select Tool</span></button>
          </li>
          <li>
            <button className="bt active"><i className="fas fa-columns"></i><span className="tx">Frame Tool</span></button>
          </li>
          <li>
            <button className="bt active"><i className="fas fa-eye-dropper"></i><span className="tx">Eyedropper Tool</span></button>
            <button className="bt"><i className="fas fa-eye-dropper"></i><span className="tx">3D Material Eyedropper Tool</span></button>
            <button className="bt"><i className="fas fa-eye-dropper"></i><span className="tx">Color Sampler Tool</span></button>
            <button className="bt"><i className="fas fa-ruler"></i><span className="tx">Ruler Tool</span></button>
            <button className="bt"><i className="fas fa-eye-dropper"></i><span className="tx">Note Tool</span></button>
            <button className="bt"><i className="fas fa-eye-dropper"></i><span className="tx">Count Tool</span></button>
          </li>
          <li>
            <button className="bt active"><i className="fas fa-tag"></i><span className="tx">Spot Healing Brush Tool</span></button>
            <button className="bt"><i className="fas fa-tag"></i><span className="tx">Healing Brush Tool</span></button>
            <button className="bt"><i className="fas fa-tag"></i><span className="tx">Patch Tool</span></button>
            <button className="bt"><i className="fas fa-tag"></i><span className="tx">Content-Aware Move Tool</span></button>
            <button className="bt"><i className="fas fa-tag"></i><span className="tx">Red Eye Tool</span></button>
          </li>
          <li>
            <button className="bt active"><i className="fas fa-paint-brush"></i><span className="tx">Brush Tool</span></button>
            <button className="bt"><i className="fas fa-pencil-alt"></i><span className="tx">Pencil Tool</span></button>
            <button className="bt"><i className="fas fa-pen"></i><span className="tx">Color Replacement Tool</span></button>
            <button className="bt"><i className="fas fa-pen-fancy"></i><span className="tx">Mixer Brush Tool</span></button>
          </li>
          <li>
            <button className="bt active"><i className="fas fa-hourglass"></i><span className="tx">Clone Stamp Tool</span></button>
            <button className="bt"><i className="fas fa-hourglass"></i><span className="tx">Pattern Stamp Tool</span></button>
          </li>
          <li>
            <button className="bt active"><i className="fas fa-coffee"></i><span className="tx">History Brush Tool</span></button>
            <button className="bt"><i className="fas fa-coffee"></i><span className="tx">Art History Brush Tool</span></button>
          </li>
          <li>
            <button className="bt active"><i className="fas fa-smile"></i><span className="tx">Eraser Tool</span></button>
            <button className="bt"><i className="fas fa-smile-beam"></i><span className="tx">Background Eraser Tool</span></button>
            <button className="bt"><i className="fas fa-smile-wink"></i><span className="tx">Magic Eraser Tool</span></button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Toolbar;

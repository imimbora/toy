import React, { Component } from "react";
import './Toolbar.css';
import '../resources/css/flaticon.css';

class Toolbar extends Component {
  render() {
    return (
      <nav className="toolbar">
        <ul class="lst">
          <li class="on">
            <button class="bt active"><i class="fas fa-arrows-alt"></i><span class="tx">Move Tool</span></button>
            <button class="bt"><i class="fas fa-file"></i><span class="tx">Artboard Tool</span></button>
          </li>
          <li>
            <button class="bt"><i class="fas fa-adjust"></i><span class="tx">Rectangular Marquee Tool</span></button>
            <button class="bt active"><i class="glyph-icon flaticon-airplane49"></i><span class="tx">Elliptical Marquee Tool</span></button>
            <button class="bt"><i class="fas fa-"></i><span class="tx">Single Row Marquee Tool</span></button>
            <button class="bt"><i class="fas fa-"></i><span class="tx">Single Column Marquee Tool</span></button>
          </li>
          <li>
            <button class="bt active"><i class="fas fa-"></i><span class="tx">Tool</span></button>
            <button class="bt"><i class="fas fa-"></i><span class="tx">Tool</span></button>
          </li>
          <li>
            <button class="bt active"><i class="fas fa-"></i><span class="tx">Tool</span></button>
            <button class="bt"><i class="fas fa-"></i><span class="tx">Tool</span></button>
          </li>
          <li>
            <button class="bt active"><i class="fas fa-"></i><span class="tx">Tool</span></button>
            <button class="bt"><i class="fas fa-"></i><span class="tx">Tool</span></button>
          </li>
          <li>
            <button class="bt active"><i class="fas fa-"></i><span class="tx">Tool</span></button>
            <button class="bt"><i class="fas fa-"></i><span class="tx">Tool</span></button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Toolbar;

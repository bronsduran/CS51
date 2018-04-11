import React, { Component } from 'react';
import Subheader from 'material-ui/Subheader';
import {Grid, Row, Col, Image } from 'react-bootstrap';
import CourseInfo from '../assets/course-info.png';
import SideBarlinks from './cs51-sidebar-links';


class CoursePage51a extends Component {

  

  render() {
    return (
      <div className="page-wrapper">
        <div className="grid-wrapper">
          <div className="row">
            <div className="col-md-3">
              <SideBarlinks classStyleName="menu-options d-none d-md-block"/>
            </div>
            <div className="col-md-9">
              <img src="./course-info.png" class="img-fluid" alt="Responsive image"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CoursePage51a;



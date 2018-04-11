import React, { Component } from 'react';
import Subheader from 'material-ui/Subheader';
import {Grid, Row, Col, Image } from 'react-bootstrap';
import CourseInfo from '../assets/course-info.png';
import SideBarlinks from './cs51-sidebar-links';


class CoursePage51a extends Component {

  

  render() {
    return (
      <div className="page-wrapper">
        <Grid className="grid-wrapper">
          <Row>
            <Col md={3} smHidden={true} xsHidden={true} >
              <SideBarlinks classStyleName="menu-options d-none d-md-block"/>
            </Col>
            <Col md={9} >
              <Image src="./course-info.png" responsive />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default CoursePage51a;



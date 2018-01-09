import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import {Grid, Row, Col, Image } from 'react-bootstrap';
import CourseInfo from '../assets/course-info.png';
import * as Airtable from '../database';


function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

class CoursePage51a extends Component {

  constructor(props) {
    super(props);
    this.state = {
      administrivia: [],
      assignments: [],
      lectureSlides: [],
      resources: [],
      other: []
    }
  }

  navigateToURL(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }


  render() {
    return (
      <div className="page-wrapper">
        <Grid className="grid-wrapper">
          <Row>
            <Col xs={9} >
              <Image src={CourseInfo} responsive />
            </Col>
            <Col xs={3} >
              <List className="menu-options">
                <Subheader>Administrivia</Subheader>
                  <ListItem primaryText="Course Information" containerElement={<a href="https://drive.google.com/file/d/1lmwA4_fwCfSl9JPQPtyPFBShLNT01tCF/view?usp=sharing" target="_blank"></a>} />
                  <ListItem primaryText="Syllabus" containerElement={<a href="https://drive.google.com/file/d/1lmwA4_fwCfSl9JPQPtyPFBShLNT01tCF/view?usp=sharing" target="_blank"></a>} />
                  <ListItem primaryText="Attendance Policy" />
                <Divider />
                <Subheader>Assignments</Subheader>
                  <ListItem primaryText="Week 1: Onboarding" containerElement={<a href="https://drive.google.com/file/d/19tjZmbFjJA0FlV5DS69ynP-Gq4Ya8d0B/view?usp=sharing" target="_blank"></a>} />
                <Divider />
                <Subheader>Lecture Slides</Subheader>
                <Divider />
                <Subheader>Resources</Subheader>
                  <ListItem primaryText="Needfinding & Synthesis Guidebook" containerElement={<a href="https://drive.google.com/file/d/1FCIsDIL1lHV4F8gsx33k2krnWUgtzrqY/view?usp=sharing" target="_blank"></a>} />
                <Divider />
              </List>
            </Col>
            
          </Row>
        </Grid>
      </div>
    );
  }
}

export default CoursePage51a;



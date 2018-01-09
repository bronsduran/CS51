import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import {Grid, Row, Col, Image } from 'react-bootstrap';
import CourseInfo from '../assets/course-info.png';

class CoursePage51a extends Component {


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
                <Subheader>Handouts</Subheader>
                  <ListItem primaryText="Course Information"/>
                  <ListItem primaryText="Syllabus" />
                  <ListItem primaryText="Attendence Policy" />
                <Divider />
                <Subheader>Assignments</Subheader>
                <Divider />
                <Subheader>Lecture Slides</Subheader>
                <Divider />
                <Subheader>Resources</Subheader>
                <Divider />
                <Subheader>Other</Subheader>
                  <ListItem primaryText="Calendar"/>
                  <ListItem primaryText="Partner Bio Book"/>
                  <ListItem primaryText="Mentor Bio Book"/>
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



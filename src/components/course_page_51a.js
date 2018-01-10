import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import {Grid, Row, Col, Image } from 'react-bootstrap';
import CourseInfo from '../assets/course-info.png';
import * as Airtable from '../database';


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

  componentDidMount() {
    // using call(this) is hacky and probably not the best practice
    // I'm doing this so that the state can be set in each of the calls
    // whenever a new record is recieved.
    Airtable.fetchAdministrivia.call(this);
    Airtable.fetchAssignments.call(this);
    Airtable.fetchLectureSlides.call(this);
    Airtable.fetchResources.call(this);
  }

  mapRecordsToElements(records) {
    return records.map((record) =>
      <ListItem 
        primaryText={record.fields["Name"]} 
        containerElement={<a href={record.fields["Link"]} target="_blank"></a>} 
      />
    );
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
                  {this.mapRecordsToElements(this.state.administrivia)}
                <Divider />
                <Subheader>Assignments</Subheader>
                  {this.mapRecordsToElements(this.state.assignments)}
                <Divider />
                <Subheader>Lecture Slides</Subheader>
                  {this.mapRecordsToElements(this.state.lectureSlides)}
                <Divider />
                <Subheader>Resources</Subheader>
                  {this.mapRecordsToElements(this.state.resources)}
                <Divider />
                <Subheader>Other</Subheader>
                  {this.mapRecordsToElements(this.state.other)}
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



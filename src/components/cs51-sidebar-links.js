import React, { Component } from 'react';
import * as Airtable from '../database';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

export default class SideBarLinks extends Component {

  constructor(props) {
    super(props);
    this.state = {
      administrivia: [],
      assignments: [],
      classSlides: [],
      resources: [],
      other: []
    }
  }

  mapRecordsToElements(records) {
    return records.map((record, key) =>
      <ListItem 
        primaryText={record.fields["Name"]} 
        containerElement={<a href={record.fields["Link"]} target="_blank"></a>} 
        key={key}
      />
    );
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

  render() {  
    return (
      <div>
        <List className="menu-options">
          <ListItem
            primaryText="Administrivia"
            initiallyOpen={true}
            primaryTogglesNestedList={true}
            nestedItems={this.mapRecordsToElements(this.state.administrivia)}
          />
          <Divider />
          <ListItem
            primaryText="Assignments"
            initiallyOpen={true}
            primaryTogglesNestedList={true}
            nestedItems={this.mapRecordsToElements(this.state.assignments)}
          />
          <Divider />
          <ListItem
            primaryText="Class Slides"
            initiallyOpen={true}
            primaryTogglesNestedList={true}
            nestedItems={this.mapRecordsToElements(this.state.classSlides)}
          />
          <Divider />
          <ListItem
            primaryText="Resources"
            initiallyOpen={true}
            primaryTogglesNestedList={true}
            nestedItems={this.mapRecordsToElements(this.state.resources)}
          />
          <Divider />
          <ListItem
            primaryText="Other"
            initiallyOpen={true}
            primaryTogglesNestedList={true}
            nestedItems={this.mapRecordsToElements(this.state.other)}
          />
          <Divider />
        </List>
      </div>
    );
  } 
}

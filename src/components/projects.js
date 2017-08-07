import React, { Component } from 'react';
import * as Airtable from '../database/Airtable';

class Projects extends Component {

  render() {
    console.log(Airtable.fetchProjects());
    return (
      <div>
        <h1> Projects Component </h1>
      </div>
    );
  }
}

export default Projects;

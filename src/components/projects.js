import React, { Component } from 'react';
import Iframe from './iframe_wrapper';
import { Grid, Row, Col } from 'react-bootstrap';

class Projects extends Component {

  render() {
    return (
      <div className="page-wrapper">
      	<Iframe 
      		src="https://airtable.com/embed/shrF8yl8k0qm1SHHx?backgroundColor=transparent&viewControls=on"
      		className="airtable-embed"
      		height="100%"
      		width="100%"
      		styles={{background: "transparent"}, {border: "none"}, {height: "100%"}}
      		frameBorder="0"
      	/>
      </div>
    );
  }
}

export default Projects;

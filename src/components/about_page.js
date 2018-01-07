import React, { Component } from 'react';
import Header from './page_header';
import Description from './page_description';
import Iframe from './iframe_wrapper';

class About extends Component {

  render() {
    return (
      <div>
        <Header title="About Us"/>
        <Description text="mission description goes here" />
        <Iframe 
          src="https://airtable.com/embed/shrDTyLMhvO3ldlTV?backgroundColor=teal&viewControls=on"
          className="airtable-embed"
          height="700"
          width="100%"
          styles="background: transparent; border: none;"
          frameBorder="0"
        />
      </div>
    );
  }
}

export default About;




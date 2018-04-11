import React, { Component } from 'react';
import Iframe from './iframe_wrapper';

class Partners extends Component {

  render() {
    return (
      <div className="page-wrapper">
       	<Iframe 
      		src="https://airtable.com/embed/shrWjp5WeTdtOJSFx?backgroundColor=transparent&viewControls=on"
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

export default Partners;


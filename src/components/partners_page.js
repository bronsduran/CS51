import React, { Component } from 'react';
import Iframe from './iframe_wrapper';
import Header from './page_header';
import Description from './page_description';

class Partners extends Component {

  render() {
    return (
      <div className="page-wrapper">
       	<Iframe 
      		src="https://airtable.com/embed/shrWjp5WeTdtOJSFx?backgroundColor=teal"
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

export default Partners;


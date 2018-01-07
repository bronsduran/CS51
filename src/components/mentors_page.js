import React, { Component } from 'react';
import Iframe from './iframe_wrapper';
import Header from './page_header';
import Description from './page_description';

const mentors_description = "mentors page description goes here";

class Mentors extends Component {

  render() {
    return (
      <div>
      	<Header title="Mentors"/>
      	<Description text={mentors_description}/>
      	<Iframe 
      		src="https://airtable.com/embed/shrrwA5kbCOFC2WLH?backgroundColor=teal&viewControls=off"
      		className="airtable-embed"
      		height="700"
      		width="100%"
      		styles="background: transparent;"
      		frameBorder="0"
      	/>
      </div>
    );
  }
}

export default Mentors;




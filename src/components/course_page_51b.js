import React, { Component } from 'react';
import Header from './page_header';
import Description from './page_description';
import {Tabs, Tab} from 'material-ui/Tabs';

class CoursePage51b extends Component {

  render() {
    return (
      <div className="page-wrapper">
        <Header 
          title="Implementing Social Impact Projects"
          subtitle="CS52 (2 units) - Spring 2018"
        />
      </div>
    );
  }
}

export default CoursePage51b;

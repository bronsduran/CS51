import React, { Component } from 'react';
import LandingPage from './landing_page';
import Projects from './projects';
import CoursePage51a from './course_page_51a';
import CoursePage51b from './course_page_51b';
import NavigationBar from './navigation_bar';

export default class App extends Component {
  render() {
    return (
      <div>
      	<NavigationBar />
      	{this.props.children}
      </div>
    );
  }
}

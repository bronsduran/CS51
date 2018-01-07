import React, { Component } from 'react';




class Header extends Component {

  render() {
    if (typeof this.props.subtitle !== 'undefined') {
      return (
        <div className="course-page-header">
          <h1>{this.props.title}</h1>
          <h2>{this.props.subtitle}</h2>
        </div>
      )
    } else {
      return (
        <div className="page-header">
          <h1>{this.props.title}</h1>
        </div>
      );
    } 
  }
}

export default Header;

import React, { Component } from 'react';

class Description extends Component {

  render() {
    return (
      <div className="page-description">
        <h4>{this.props.text}</h4>
      </div>
    );
  }
}

export default Description;

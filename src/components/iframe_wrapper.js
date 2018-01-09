import React, { Component } from 'react';


class Iframe extends Component {

  render() {
    return (
      <div className="iframe-wrapper">
        <iframe 
          src={this.props.src} 
          height={this.props.height} 
          width={this.props.width} 
          className={this.props.class} 
          frameBorder={this.props.frameborder}
          style={this.props.styles}
        />
      </div>
    );
  }
}

export default Iframe;




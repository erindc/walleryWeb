import React, { Component } from 'react';
import Nav from '../shared/Nav';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: true
    }
  }

  handleUpload = () => {
  //TODO
  };

  render() {
    return (
      <div>
        <Nav authenticated={this.state.authenticated} handleUpload={this.handleUpload} />
      </div>
    );
  };
};

export default Gallery;
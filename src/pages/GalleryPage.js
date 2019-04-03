import React, { Component } from 'react';
import Nav from '../shared/Nav';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: true
    }
  }

  render() {
    return (
      <div>
        <Nav authenticated={this.state.authenticated} />
      </div>
    );
  };
};

export default Gallery;
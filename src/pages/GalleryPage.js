import React, { Component } from 'react';
import Nav from '../shared/Nav';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //TODO: authentication
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
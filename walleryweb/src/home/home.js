import React, { Component } from 'react';
import Nav from '../shared/Nav';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      password: '',
      authenticated: false 
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

export default Home;
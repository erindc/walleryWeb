import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
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
        <div className='main textCenter'>
          <Typography variant='h4'>The Web Based Gallery</Typography>
          <br/><br/>
          <Button variant='contained' color='primary'>create an account</Button>
        </div>
      </div>
    );
  };
};

export default Home;
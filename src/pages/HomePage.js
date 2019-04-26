import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import Nav from '../shared/Nav';
import { withRouter } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <Nav authenticated={false} currentUser={null} />
        <div className='main textCenter'>
          <Typography variant='h4'>The Web Based Gallery</Typography>
        </div>
      </div>
    );
  }
};

export default withRouter(Home);
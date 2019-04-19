import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
// import Button from '@material-ui/core/Button';
import Nav from '../shared/Nav';
import { withRouter } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleStartNewAccount = this.handleStartNewAccount.bind(this)
  }

  handleStartNewAccount() {
    this.props.history.push('/newAccount');
  };

  render() {
    return (
      <div>
        <Nav authenticated={false} currentUser={null} />
        <div className='main textCenter'>
          <Typography variant='h4'>The Web Based Gallery</Typography>
          <br/><br/>
          {/* <Button variant='contained' color='primary' onClick={this.handleStartNewAccount}>create an account</Button> */}
        </div>
      </div>
    );
  }
};

export default withRouter(Home);
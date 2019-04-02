import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LoginDialog from '../dialogs/LoginDialog';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  }
};

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: props.classes,
      authenticated: props.authenticated,
      showLoginDialog: false
    };
  };

  handleStartLogin = () => {
    this.setState({showLoginDialog: true});
  };

  handleCloseLogin = () => {
    this.setState({showLoginDialog: false});
  };

  render() {
    return (
      <div className={this.state.classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" color="inherit" className={this.state.classes.grow}>
              Wallery
            </Typography>
            {!this.state.authenticated ? (
              <Button color="inherit" onClick={this.handleStartLogin}>Login</Button>
            ) : (
              <Button color="inherit">Logout</Button>
            )}
          </Toolbar>
        </AppBar>
        <LoginDialog open={this.state.showLoginDialog} onClose={this.handleCloseLogin} />
      </div>
    );
  };
};

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  authenticated: PropTypes.bool.isRequired
};

export default withStyles(styles)(NavBar);
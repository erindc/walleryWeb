import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";
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
      authenticated: this.props.authenticated,
      showLoginDialog: false
    };
  };

  handleStartLogin = () => {
    this.setState({showLoginDialog: true});
  };

  handleCloseLogin = () => {
    this.setState({showLoginDialog: false});
  };

  handleAuth = () => {
    //TODO: authentication
    this.setState({showLoginDialog: false, authenticated: true});
    this.props.history.push('/gallery');
  };

  handleLogout = () => {
    this.setState({authenticated: false});
    this.props.history.push('/');
  };

  render() {
    const { handleUpload } = this.props;
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
              <div>
                <Button color="inherit" onClick={handleUpload}>Upload</Button>
                <Button color="inherit" onClick={this.handleLogout}>Logout</Button>
              </div>
            )}
          </Toolbar>
        </AppBar>
        <LoginDialog open={this.state.showLoginDialog} onClose={this.handleCloseLogin} handleLogin={this.handleAuth} />
      </div>
    );
  };
};

NavBar.propTypes = {
  authenticated: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  handleUpload: PropTypes.func
};

export default withRouter(withStyles(styles)(NavBar));
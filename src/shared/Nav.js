import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import SnackBar from '../shared/SnackBar';

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
      currentUser: this.props.currentUser,
      alert: false,
      alertVariant: '',
      alertMessage: '',
      googleClientID: ''
    };
  };

  componentWillMount() {
    const googleClientID = process.env.NODE_ENV === 'production' ? '591528315421-33u96kuhdfijtreogca3f6eoeloffq2c.apps.googleusercontent.com' : '467612931825-1l19dkql83ao0ikrpg1iukm9t6ukph8u.apps.googleusercontent.com';
    this.setState({googleClientID});
  }

  successResponseGoogle = (response) => {
    this.setState({currentUser: response.profileObj.email, authenticated: true});
    this.props.history.push({pathname: '/gallery', state: { currentUser: this.state.currentUser }});
  };

  failureResponseGoogle = (response) => {
    console.log(response);
    this.setState({
      alert: true,
      alertVariant: 'error',
      alertMessage: 'Error occured during login'})
  };

  handleLogout = () => {
    this.setState({authenticated: false, currentUser: null});
    this.props.history.push('/');
  };

  handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ alert: false });
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
              <GoogleLogin
              clientId={this.state.googleClientID}
              buttonText="Login"
              onSuccess={this.successResponseGoogle}
              onFailure={this.failureResponseGoogle}
              cookiePolicy={'single_host_origin'}
              render={renderProps => (
                <Button color="inherit" onClick={renderProps.onClick}>Login</Button>
              )}
            />
            ) : (
              <div>
                <Button color="inherit" onClick={handleUpload}>Upload</Button>
                <GoogleLogout
                  buttonText="Logout"
                  clientId={this.state.googleClientID}
                  onLogoutSuccess={this.handleLogout}
                  render={renderProps => (
                    <Button color="inherit" onClick={renderProps.onClick}>Logout</Button>
                  )}
                >
                </GoogleLogout>
              </div>
            )}
          </Toolbar>
        </AppBar>
        <SnackBar open={this.state.alert} onClose={this.handleCloseAlert} variant={this.state.alertVariant} message={this.state.alertMessage} />
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
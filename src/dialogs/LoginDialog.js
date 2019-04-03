import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingBottom: '10px'
  },
  input: {
    width: '80%',
    margin: '10px auto 10px auto'
  }
}

class LoginDialog extends Component { 

  render() {
    const { classes, onClose, handleLogin, ...other } = this.props;
    return (
      <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">Login</DialogTitle>
        <div>
          <form className={classes.container} noValidate autoComplete="off">
            <Input
              placeholder="Email"
              className={classes.input}
              inputProps={{
                'aria-label': 'Description',
              }}
            />
            <Input
              placeholder="Password"
              className={classes.input}
              inputProps={{
                'aria-label': 'Description',
              }}
            />
          </form>  
          <div className='floatRight'>
            <Button onClick={onClose} variant='contained' style={{marginBottom:'10px', marginRight:'10px'}}>Cancel</Button>
            <Button onClick={handleLogin} variant='contained' color='primary' style={{marginBottom:'10px', marginRight:'10px'}}>Enter</Button>
          </div>
        </div>
      </Dialog>
    );
  }
}

LoginDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(LoginDialog)
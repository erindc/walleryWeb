import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingBottom: '10px',
  },
  input: {
    width: '80%',
    margin: '10px auto 10px auto',
  },
});

class LoginDialog extends Component {
  handleClose = () => {
    this.props.onClose();
  };

  render() {
    const { classes, onClose, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
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
          <Button variant='contained' color='primary' className='floatRight'>Enter</Button>
        </div>
      </Dialog>
    );
  }
}

LoginDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
};

export default withStyles(styles)(LoginDialog);
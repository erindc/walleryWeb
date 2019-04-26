import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

const styles = {
  input: {
    width: '80%',
    margin: '10px auto 20px auto'
  }
}

class UploadDialog extends Component { 

  render() {
    const { classes, onClose, handleUpload, btnDisabled, ...other } = this.props;
    return (
      <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">Upload</DialogTitle>
        <DialogContent>
          <Input
            id='file-input'
            className={classes.input}
            type="file"
          />
          <DialogContentText>
            Select a .jpeg, .pdf, or .png file
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} variant='contained' size='small' style={{marginBottom:'10px', marginRight:'10px'}}>Cancel</Button>
          <Button onClick={handleUpload} disabled={btnDisabled} variant='contained' size='small' color='primary' style={{marginBottom:'10px', marginRight:'10px'}}>Upload</Button>
        </DialogActions>
      </Dialog>
    );
  }
}

UploadDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  handleUpload: PropTypes.func.isRequired,
  btnDisabled: PropTypes.bool.isRequired

};

export default withStyles(styles)(UploadDialog)
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
    margin: '10px auto 20px auto'
  }
}

class UploadDialog extends Component { 

  render() {
    const { classes, onClose, handleUpload, ...other } = this.props;
    return (
      <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">Upload</DialogTitle>
        <div className={classes.container}>
          <Input
            id='file-input'
            className={classes.input}
            type="file"
          />
          </div>
          <div className='ml-auto mb5'>
            <Button onClick={onClose} variant='contained' size='small' style={{marginBottom:'10px', marginRight:'10px'}}>Cancel</Button>
            <Button onClick={handleUpload} variant='contained' size='small' color='primary' style={{marginBottom:'10px', marginRight:'10px'}}>Upload</Button>
          </div>
      </Dialog>
    );
  }
}

UploadDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  handleUpload: PropTypes.func.isRequired
};

export default withStyles(styles)(UploadDialog)
import React, { Component } from 'react';
import Nav from '../shared/Nav';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ImageBox from '../shared/ImageBox';
import UploadDialog from '../dialogs/UploadDialog';
import SnackBar from '../shared/SnackBar';
import { uploadFile } from '../services/uploads';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginLeft: '10px',
    marginRight: '10px'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: true,
      showUploadDialog: false,
      alert: false,
      images: [
        { image:null, src:'https://bucketeer-fd97f80b-c9ae-47af-9785-9ee39bb37e64.s3.amazonaws.com/public/b88a2d5b-adf2-4b42-80d2-4e754cd76561000006_001.pdf', likes:4, flags:0 },
        { image:null, src: '', likes:2, flags:1 },
        { image:null, src: '', likes:1, flags:0 }
      ],
      alertVariant: 'success',
      alertMessage: 'Upload successful'
    }
  }

  handleStartUpload = () => {
    this.setState({ showUploadDialog: true })
  };

  handleCloseUpload = () => {
    this.setState({ showUploadDialog: false })
  };

  handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

  this.setState({ alert: false });
};

  handleUpload = async () => {
    const formData = new FormData();
    const files = document.getElementById('file-input').files;
    const { name, type, data } = files[0];
    formData.append('walleryImage', new File([data], name, { type }));

    const res = await uploadFile(formData);
    if (res.status === 201) {
      this.setState({ showUploadDialog: false, alert: true })
    } else {
      this.setState({ showUploadDialog: false, alert: true, alertVariant: 'error', alertMessage: 'Error uploading, try again later' })
    }
  }

  handleLike = () => {
    //TODO
  };

  handleFlag = () => {
    //TODO
  };
  
  handlePurchase = () => {
    //TODO
  };

  render() {
    const { classes } = this.props;
    const { images } = this.state;

    return (
      <React.Fragment>
        <Nav authenticated={this.state.authenticated} handleUpload={this.handleStartUpload} />
        <SnackBar open={this.state.alert} onClose={this.handleCloseAlert} variant={this.state.alertVariant} message={this.state.alertMessage} />
        <div className={classes.root}>
          <Grid container spacing={24} style={{marginTop: '20px'}}>
            {images.map((image, i)=> {
              return <ImageBox image={image} handleLike={this.handleLike} handleFlag={this.handleFlag} handlePurchase={this.handlePurchase} key={i} />
            })}
          </Grid>
        </div>
        <UploadDialog open={this.state.showUploadDialog} onClose={this.handleCloseUpload} handleUpload={this.handleUpload} />
      </React.Fragment>
    );
  };
};

Gallery.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Gallery);
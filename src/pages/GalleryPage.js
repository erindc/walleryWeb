import React, { Component } from 'react';
import Nav from '../shared/Nav';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import ImageBox from '../shared/ImageBox';
import UploadDialog from '../dialogs/UploadDialog';
import SnackBar from '../shared/SnackBar';
import { uploadFile, getImages, likeImage, flagImage } from '../services/images';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginLeft: '10px',
    marginRight: '10px'
  }
});


class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: true,
      showUploadDialog: false,
      alert: false,
      images: [],
      alertVariant: '',
      alertMessage: '',
      currentUser: this.props.location.state ? this.props.location.state.currentUser : null,
      btnDisabled: false
    }
  }

  getImages = async () => {
    try {
      const images = await getImages();
      this.setState({images});
    } catch (err) {
      console.error(err);
    }
  }

  componentDidMount() {
    this.getImages();
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
    this.setState({btnDisabled: true});
    const formData = new FormData();
    const files = document.getElementById('file-input').files;
    const validTypes = ['image/png', 'image/pdf', 'image/jpeg', 'image/jpg']

    if (validTypes.includes(files[0].type)) {
      formData.append('walleryImage', files[0]);

      const status = await uploadFile(formData);
      if (status === 201) {
        this.setState({
          showUploadDialog: false,
          alert: true,
          alertVariant: 'success',
          alertMessage: 'Upload successful'
        })
        this.getImages();
        this.setState({btnDisabled: false});
      } else {
        this.setState({ showUploadDialog: false, alert: true, alertVariant: 'error', alertMessage: 'Error uploading, try again later', btnDisabled: false })
      }
    } else {
      this.setState({
        alert: true,
        alertVariant: 'error',
        alertMessage: 'File extension must be .png .pdf or .jpeg',
        btnDisabled: false
      })
    }
  }

  handleLike = async (id) => {
    const status = await likeImage(id);
    if (status === 204) {
      this.getImages();
    } else {
      console.error(status);
    }
  };
  
  handleFlag = async (id) => {
    const status = await flagImage(id);
    if (status === 204) {
      this.getImages();
    } else {
      console.error(status);
    }
  };
  
  handlePurchase = () => {
    this.setState({
      alert: true,
      alertVariant: 'warning',
      alertMessage: 'Purchasing is not yet implemented'
    })
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Nav authenticated={this.state.authenticated} handleUpload={this.handleStartUpload} currentUser={this.state.currentUser} />
        <SnackBar open={this.state.alert} onClose={this.handleCloseAlert} variant={this.state.alertVariant} message={this.state.alertMessage} />
        <div className={classes.root}>
          <Grid container spacing={24} style={{marginTop: '20px'}}>
            {this.state.images.length > 0 && this.state.images.map((image, i)=> {
              return <ImageBox image={image} handleLike={this.handleLike} handleFlag={this.handleFlag} handlePurchase={this.handlePurchase} key={i} />
            })}
          </Grid>
        </div>
        <UploadDialog open={this.state.showUploadDialog} onClose={this.handleCloseUpload} handleUpload={this.handleUpload} btnDisabled={this.state.btnDisabled} />
      </React.Fragment>
    );
  };
};

Gallery.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(Gallery));
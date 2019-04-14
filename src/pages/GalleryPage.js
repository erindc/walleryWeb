import React, { Component } from 'react';
import Nav from '../shared/Nav';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ImageBox from '../shared/ImageBox';
import UploadDialog from '../dialogs/UploadDialog';
import SnackBar from '../shared/SnackBar';
import { uploadFile, getImages } from '../services/uploads';

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
      images: [],
      alertVariant: '',
      alertMessage: ''
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
    const formData = new FormData();
    const files = document.getElementById('file-input').files;
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

    return (
      <React.Fragment>
        <Nav authenticated={this.state.authenticated} handleUpload={this.handleStartUpload} />
        <SnackBar open={this.state.alert} onClose={this.handleCloseAlert} variant={this.state.alertVariant} message={this.state.alertMessage} />
        <div className={classes.root}>
          <Grid container spacing={24} style={{marginTop: '20px'}}>
            {this.state.images.length > 0 && this.state.images.map((image, i)=> {
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
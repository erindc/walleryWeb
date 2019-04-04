import React, { Component } from 'react';
import Nav from '../shared/Nav';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ImageBox from '../shared/ImageBox';
import UploadDialog from '../dialogs/UploadDialog';
import SnackBar from '../shared/SnackBar';

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
        { image:null, likes:4, flags:0 },
        { image:null, likes:2, flags:1 },
        { image:null, likes:1, flags:0 }
      ]
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

  handleUpload = () => {
    //TODO
    this.setState({ showUploadDialog: false, alert: true })
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
        <SnackBar open={this.state.alert} onClose={this.handleCloseAlert} variant='success' message='Upload successful' />
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
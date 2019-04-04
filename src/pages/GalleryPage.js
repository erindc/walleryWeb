import React, { Component } from 'react';
import Nav from '../shared/Nav';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ImageBox from '../shared/ImageBox';

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
      images: [
        { image:null, likes:4, flags:0 },
        { image:null, likes:2, flags:1 },
        { image:null, likes:1, flags:0 }
      ]
    }
  }

  handleUpload = () => {
  //TODO
  };

  handleLike = () => {
  //TODO
  }

  handleFlag = () => {
  //TODO
  }
  
  handlePurchase = () => {
  //TODO
  }

  render() {
    const { classes } = this.props;
    const { images } = this.state;

    return (
      <React.Fragment>
        <Nav authenticated={this.state.authenticated} handleUpload={this.handleUpload} />
        <div className={classes.root}>
          <Grid container spacing={24} style={{marginTop: '20px'}}>
            {images.map((image, i)=> {
              return <ImageBox image={image} handleLike={this.handleLike} handleFlag={this.handleFlag} handlePurchase={this.handlePurchase} key={i} />
            })}
          </Grid>
        </div>
      </React.Fragment>
    );
  };
};

Gallery.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Gallery);
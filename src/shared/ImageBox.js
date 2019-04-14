import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpOutlined from '@material-ui/icons/ThumbUpOutlined';
import Flag from '@material-ui/icons/Flag';
import Payment from '@material-ui/icons/Payment';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import PropTypes from 'prop-types';
import { prodEndpoint, devEndpoint } from '../services/uploads';

const styles = theme => ({
  imageCard: {
    height: '350px',
  },
  content: {
    height: '80%'
  },
  button: {
    margin: theme.spacing.unit,
  },
  image: {
    maxHeight: '100%',
    width: '100%'
  }
});

const ImageBox = ({ classes, image, handleLike, handleFlag, handlePurchase }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.imageCard}>
        <CardContent className={classes.content}>
          <img src={prodEndpoint + image.location} alt='art work' className={classes.image} />
        </CardContent>
        <CardActions>
          <IconButton className={classes.button} aria-label="Like" onClick={handleLike}>
            <Badge badgeContent={image.likes} color="primary">
              <ThumbUpOutlined/>
            </Badge>
          </IconButton>
          <div style={{marginLeft:'auto'}}>
            <IconButton className={classes.button} aria-label="Flag" onClick={handleFlag}>
              <Badge badgeContent={image.flags} color="error">
                <Flag/>
              </Badge>
            </IconButton>
            <IconButton className={classes.button} aria-label="Purchase" onClick={handlePurchase}>
              <Payment/>
            </IconButton>
          </div>
        </CardActions>
      </Card>
    </Grid>
  );
}

ImageBox.propTypes = {
  classes: PropTypes.object.isRequired,
  image: PropTypes.object.isRequired,
  handleLike: PropTypes.func.isRequired,
  handleFlag: PropTypes.func.isRequired,
  handlePurchase: PropTypes.func.isRequired
};

export default withStyles(styles)(ImageBox);
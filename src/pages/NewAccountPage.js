import React, { Component } from 'react';
import Nav from '../shared/Nav';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SnackBar from '../shared/SnackBar';

const styles = theme => ({
  card: {
    minWidth: 275,
    maxWidth: '50%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    margin: 'auto',
    marginTop: '30px'
  },
  formDiv: {
    width: '90%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    margin: 'auto'
  },
  input: {
    width: '100%',
    margin: '10px auto 10px auto'
  }
});

class NewAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      alert: false
    }
  }

  handleStartCreateAccount = () => {
    //TODO: Create account
    this.setState({ alert: true })
  };

  handleCloseAlert = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }

    this.setState({ alert: false })
    this.props.history.push('/gallery')
  };

  handleCancelCreateAccount = () => {
    this.props.history.push('/')
  };

  render() {
    const { classes } = this.props;
    return(
      <React.Fragment>
        <Nav authenticated={false} />
        {/* TODO: make snackbar dynamic */}
        <SnackBar open={this.state.alert} onClose={this.handleCloseAlert} variant='success' message='Account created' />
        <Card className={classes.card}>
          <CardContent>
            <Typography variant='h5' className='textCenter' color="textSecondary" gutterBottom>
              New Account
            </Typography>
            <div className={classes.formDiv}>
              <form autoComplete='off'>
                {/* TODO: figure out required inputs */}
                <Input
                  placeholder='First Name'
                  type='text'
                  required
                  className={classes.input}
                  inputProps={{
                    'aria-label': 'Description',
                  }}
                />
                <Input
                  placeholder='Last Name'
                  type='text'
                  className={classes.input}
                  inputProps={{
                    'aria-label': 'Description',
                  }}
                />
                <Input
                  placeholder="Email"
                  type='email'
                  className={classes.input}
                  inputProps={{
                    'aria-label': 'Description',
                  }}
                />
                <Input
                  placeholder="Password"
                  type='password'
                  className={classes.input}
                  inputProps={{
                    'aria-label': 'Description',
                  }}
                />
                <Input
                  placeholder="Confirm Password"
                  type='password'
                  className={classes.input}
                  inputProps={{
                    'aria-label': 'Description',
                  }}
                />
              </form> 
            </div> 
          </CardContent>
          <CardActions className='floatRight'>
            <Button variant='contained' onClick={this.handleCancelCreateAccount}>Cancel</Button>
            <Button variant='contained' color='primary' onClick={this.handleStartCreateAccount}>Create</Button>
          </CardActions>
        </Card>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(NewAccount);
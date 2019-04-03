import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import SnackBarWrapper from './SnackBarWrapper'
import PropTypes from 'prop-types';

class SnackBar extends React.Component {

  render() {
    const { open, onClose, variant, message } = this.props;

    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          open={open}
          autoHideDuration={3000}
          onClose={onClose}
        >
          <SnackBarWrapper
            onClose={onClose}
            variant={variant}
            message={message}
          />
        </Snackbar>
      </div>
    );
  }
}

SnackBar.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  variant: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default SnackBar;
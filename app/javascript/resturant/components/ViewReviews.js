import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MessageIcon from '@material-ui/icons/Message';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import ResturantReview from './ResturantReview';
import PropTypes from 'prop-types';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit * 2,
  },
});

class ViewReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, reviews } = this.props;
    const dialotTitle = 'View Reviews';
    return (
      <div>
        <Button variant="contained" onClick={this.handleClickOpen} color="primary" className={classes.button}>
                Reviews
          <MessageIcon/>
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">{dialotTitle}</DialogTitle>
          <DialogContent>
            <ResturantReview reviews={reviews} handleClose={this.handleClose} />
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}
ViewReviews.propTypes = {
  classes: PropTypes.object,
  reviews: PropTypes.array,
};
export default withStyles(styles, { withTheme: true })(ViewReviews);

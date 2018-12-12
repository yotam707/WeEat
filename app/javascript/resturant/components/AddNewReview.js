import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import ResturantReviewForm from '../forms/ResturantReviewForm';
import PropTypes from 'prop-types';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit * 2,
  },
});

class AddNewReview extends React.Component {
  state = {
    open: false,
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, resturantId } = this.props;
    return (
      <div>
        <Button variant="contained" onClick={this.handleClickOpen} color="secondary" className={classes.button}>
            Add Review
          <AddIcon/>
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">{'Add new review'}</DialogTitle>
          <DialogContent>
            <ResturantReviewForm resturantId={resturantId} handleClose={this.handleClose} />
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}
AddNewReview.propTypes = {
  classes: PropTypes.object,
  resturantId: PropTypes.number,
};

export default withStyles(styles, { withTheme: true })(AddNewReview);


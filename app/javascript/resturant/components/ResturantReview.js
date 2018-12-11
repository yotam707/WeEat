import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import StarRating from '../components/StarRating';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
  inline: {
    display: 'inline',
  },
});


const ResturantReview = ({ classes, reviews }) => {
  return (
    <List className={classes.root} subheader={<li />}>
      {
        reviews.map((review) => (
          <li key={`section-${review.id}`} className={classes.listSection}>
            <ul className={classes.ul}>
              <ListItem key={`item-${review.id}`}>
                <ListItemText primary={`Review by ${review.reviewer_name}`}
                  secondary={
                    <React.Fragment>
                      <Typography component="span" className={classes.inline} color="textPrimary">
                        {review.comment}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <ListItem>
                <Typography component="span" align="right">
                  <StarRating rating={review.rating} editing={false} />
                </Typography>
              </ListItem>
            </ul>
          </li>
        ))
      }
    </List>
  );
};

ResturantReview.propTypes = {
  classes: PropTypes.object,
  reviews: PropTypes.array,
};
export default withStyles(styles, { withTheme: true })(ResturantReview);

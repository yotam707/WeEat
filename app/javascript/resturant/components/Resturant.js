import React from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import StarRating from '../components/StarRating';
import ViewReviews from './ViewReviews';
import AddNewReview from './AddNewReview';
import TenbisIcon from './TenbisIcon';
import { CardHeader } from '@material-ui/core';
import PropTypes from 'prop-types';


const styles = () => ({
  card: {
    maxWidth: 350,
  },
  actions: {
    display: 'flex',
  },
});


const Resturant = (props) => {
  const { resturant, classes } = props;
  return (
    <React.Fragment>
      { resturant && (
        <Card className={classes.card}>
          <CardHeader action={
            resturant.tenbis && <TenbisIcon />
          }
          title={
            resturant.name
          }
          subheader={
            resturant.cuisine
          }
          />
          <CardContent>
            <Typography component="div" variant="body2" gutterBottom align="left">
              <StarRating rating={resturant.rating_avg} editing={false} />
            </Typography>
          </CardContent>
          <CardActions className={classes.actions}>
            {
              resturant.reviews.length > 0 &&
                <ViewReviews reviews={resturant.reviews} resturantId={resturant.id} />
            }
            <AddNewReview resturantId={resturant.id} />
          </CardActions>
        </Card>
      )
      }
    </React.Fragment>
  );
};

Resturant.propTypes = {
  classes: PropTypes.object,
  resturant: PropTypes.object,
};
export default withStyles(styles)(Resturant);

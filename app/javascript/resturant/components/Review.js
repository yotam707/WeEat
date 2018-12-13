import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const Review = (props) => {
  const { review } = props;
  return (
    <div>
      { review ? (
        <Card >
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {review.reviewer_name}
            </Typography>
            <Typography component="p">
              {review.comment}
            </Typography>
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
};

Review.propTypes = {
  review: PropTypes.object,
};

export default Review;

import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import StarRatingComponent from 'react-star-rating-component';
import StarRate from '@material-ui/icons/StarRate';

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


class ResturantReview extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const { classes, reviews } = this.props;
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
                                    <StarRatingComponent
                                        name="rate2" 
                                        editing={false}
                                        renderStarIcon={() => <StarRate/>}
                                        starCount={3}
                                        value={review.rating}
                                    />
                                    </Typography>
                                </ListItem>
                            </ul>
                        </li> 
                    ))
                }
            </List>
        );
    }
}
  

export default withStyles(styles, { withTheme: true })(ResturantReview);

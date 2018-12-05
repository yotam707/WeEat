import React from 'react'
import Card from '@material-ui/core/Card'
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions';
import StarRatingComponent from 'react-star-rating-component';
import StarRate from '@material-ui/icons/StarRate';
import ViewReviews from './ViewReviews';
import AddNewReview from './AddNewReview';
import TenbisIcon from './TenbisIcon';
import { CardHeader } from '@material-ui/core';


const styles = theme => ({
    card: {
      maxWidth: 350,
    },
    actions: {
        display: 'flex',
      },
  });

  
const Resturant = (props) => {
    const { resturant ,classes} = props;
    return(
        <div>
            { resturant ? (
                <Card className={classes.card}>
                    <CardHeader action={
                        resturant.tenbis &&
                        <TenbisIcon />
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
                        <StarRatingComponent
                            name="rate2" 
                            editing={false}
                            renderStarIcon={() => <StarRate/>}
                            starCount={3}
                            value={resturant.rating}
                        />
                        
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
            ) : null}

           
        </div>
    )
}
export default withStyles(styles)(Resturant)
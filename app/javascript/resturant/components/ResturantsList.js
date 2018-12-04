import React from 'react';
import ResturantReview from './ResturantReview';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Resturant from './Resturant';


export default ({ resturants }) => 
<Grid container spacing={24} style={{padding: 24}}>
    {resturants.map((r) => 
        ( <Grid key={r.id} item xs={12} sm={6} lg={4} xl={3}>
            <Resturant resturant={r}/>
            </Grid>
            )
        )} 
</Grid>
  

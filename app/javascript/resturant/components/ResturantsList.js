import React from 'react';
import Grid from '@material-ui/core/Grid';
import Resturant from './Resturant';
import PropTypes from 'prop-types';

const ResturantsList = ({ resturants }) =>
  (
    <Grid container spacing={24} style={{ padding: 24 }}>
      {resturants.map((r) =>
        (<Grid key={r.id} item xs={12} sm={6} lg={4} xl={3}>
          <Resturant resturant={r}/>
        </Grid>
        )
      )}
    </Grid>
  );

ResturantsList.propTypes = {
  resturants: PropTypes.array,
};
export default ResturantsList;

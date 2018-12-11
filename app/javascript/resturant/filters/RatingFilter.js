import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Tooltip from '@material-ui/core/Tooltip';
import StarIcon from '@material-ui/icons/Star';
import PropTypes from 'prop-types';
import StarRating from '../components/StarRating';

const RatingFilter = ({ filterRating, minStarRating, iconClass }) => {
  return (<ListItem button>
    <ListItemIcon>
      <StarIcon className={iconClass} />
    </ListItemIcon>
    <Tooltip title="Clear" placement="left">
      <ListItemText onClick={() => filterRating(0)} primary="Rating" />
    </Tooltip>
    <ListItemSecondaryAction>
      <StarRating rating={minStarRating} onStarClick={(starRating) => filterRating(starRating)} />
    </ListItemSecondaryAction>
  </ListItem>);
};
RatingFilter.propTypes = {
  filterRating: PropTypes.func,
  minStarRating: PropTypes.number,
  iconClass: PropTypes.object,
};
export default RatingFilter;

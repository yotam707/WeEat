import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Tooltip from '@material-ui/core/Tooltip';
import RenderStarsNoForm from '../renderFields/renderStarsNoForm';
import StarIcon from '@material-ui/icons/Star';

const RatingFilter = ({ filterRating, minStarRating, iconClass }) => {
    return <ListItem button>
              <ListItemIcon>
                <StarIcon className={iconClass} />
              </ListItemIcon>
              <Tooltip title="Clear" placement="left">
                <ListItemText onClick={() => filterRating(0)} primary="Rating" />
                </Tooltip>
              <ListItemSecondaryAction>
                <RenderStarsNoForm rating={minStarRating} onStarClick={(minStarRating) => filterRating(minStarRating)} />
              </ListItemSecondaryAction>
    </ListItem>
}

export default RatingFilter;

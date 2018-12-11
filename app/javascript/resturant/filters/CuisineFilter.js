import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FastFoodIcon from '@material-ui/icons/Fastfood';
import PropTypes from 'prop-types';

const CuisineFilter = ({ filterCuisine, cuisine, iconClass }) => {
  return (<ListItem button>
    <ListItemIcon>
      <FastFoodIcon className={iconClass} />
    </ListItemIcon>
    <ListItemText primary="Cuisine" />
    <ListItemSecondaryAction>
      <Select
        value={cuisine}
        onChange={(e) => filterCuisine(e.target.value) }
        inputProps={{
          name: 'cuisine',
          id: 'cuisine-type',
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'Japanease'}>Japanease</MenuItem>
        <MenuItem value={'Indian'}>Indian</MenuItem>
        <MenuItem value={'Thai'}>Thai</MenuItem>
        <MenuItem value={'Burgers'}>Burgers</MenuItem>
        <MenuItem value={'Israeli'}>Israeli</MenuItem>
      </Select>
    </ListItemSecondaryAction>
  </ListItem>);
};

CuisineFilter.propTypes = {
  filterCuisine: PropTypes.func,
  cuisine: PropTypes.object,
  iconClass: PropTypes.object,
};
export default CuisineFilter;

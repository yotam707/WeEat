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
  const Cuisine = 'Cuisine';
  return (<ListItem button>
    <ListItemIcon>
      <FastFoodIcon className={iconClass} />
    </ListItemIcon>
    <ListItemText primary={Cuisine} />
    <ListItemSecondaryAction>
      <Select
        value={cuisine}
        onChange={(e) => filterCuisine(e.target.value) }
        inputProps={{
          name: 'cuisine',
          id: 'cuisine-type',
        }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {['Japanease', 'Indian', 'Thai', 'Burgers', 'Israeli'].map((text) => (
          <MenuItem button key={text} value={text}>{text}</MenuItem>
        ))}
      </Select>
    </ListItemSecondaryAction>
  </ListItem>);
};

CuisineFilter.propTypes = {
  filterCuisine: PropTypes.func,
  cuisine: PropTypes.string,
  iconClass: PropTypes.string,
};
export default CuisineFilter;

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import AvTimerIcon from '@material-ui/icons/AvTimer';
import PropTypes from 'prop-types';

const DeliveryFilter = ({ filterMaxDeliveryTime, maxDeliveryInHours, iconClass }) => {
  return (<ListItem button>
    <ListItemIcon>
      <AvTimerIcon className={iconClass} />
    </ListItemIcon>
    <ListItemText primary="Delivery Time" />
    <ListItemSecondaryAction>
      <Select
        value={maxDeliveryInHours}
        onChange={(e) => filterMaxDeliveryTime(e.target.value) }
        inputProps={{
          name: 'delivery_time',
          id: 'delivery-time-type',
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>1 Hour</MenuItem>
        <MenuItem value={2}>2 Hours</MenuItem>
        <MenuItem value={3}>3 Hours</MenuItem>
        <MenuItem value={4}>4 Hours</MenuItem>
        <MenuItem value={5}>5 Hours</MenuItem>
      </Select>
    </ListItemSecondaryAction>
  </ListItem>);
};
DeliveryFilter.propTypes = {
  filterMaxDeliveryTime: PropTypes.func,
  maxDeliveryInHours: PropTypes.number,
  iconClass: PropTypes.object,
};
export default DeliveryFilter;

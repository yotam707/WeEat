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
  const DeliveryTime = 'Delivery Time';
  return (<ListItem button>
    <ListItemIcon>
      <AvTimerIcon className={iconClass} />
    </ListItemIcon>
    <ListItemText primary={DeliveryTime} />
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
        {[1, 2, 3, 4, 5].map((val) => {
          let text = val % 10 === 1 ? val + ' Hour' : val + ' Hours';
          return <MenuItem button key={val} value={val}>{text}</MenuItem>;
        }
        )}
      </Select>
    </ListItemSecondaryAction>
  </ListItem>);
};
DeliveryFilter.propTypes = {
  filterMaxDeliveryTime: PropTypes.func,
  maxDeliveryInHours: PropTypes.number,
  iconClass: PropTypes.string,
};
export default DeliveryFilter;

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TenBisIcon from '../components/TenbisIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Switch from '@material-ui/core/Switch';
import PropTypes from 'prop-types';

const TenBisFilter = ({ filterTenBis, tenbis }) =>{
  return (<ListItem button>
    <ListItemIcon>
      <TenBisIcon />
    </ListItemIcon>
    <ListItemText primary="10Bis" />
    <ListItemSecondaryAction>
      <Switch
        onChange={filterTenBis}
        checked={tenbis}
      />
    </ListItemSecondaryAction>
  </ListItem>);
};
TenBisFilter.propTypes = {
  filterTenBis: PropTypes.func,
  tenbis: PropTypes.bool,
};
export default TenBisFilter;

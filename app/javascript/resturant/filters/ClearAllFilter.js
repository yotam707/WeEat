import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';

const ClearAllFilter = ({ clearAll }) => {
  return (<ListItem button>
    <ListItemText primary="Clear All" />
    <ListItemSecondaryAction>
      <IconButton aria-label="Clear" onClick={clearAll} >
        <DeleteIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>);
};

ClearAllFilter.propTypes = {
  clearAll: PropTypes.func,
};
export default ClearAllFilter;

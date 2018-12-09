import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';;
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItemText from '@material-ui/core/ListItemText';
import { connect } from 'react-redux';
import * as Actions from "../actions/resturant.actions";
import TenBisFilter from '../filters/TenBisFilter';
import RatingFilter from '../filters/RatingFilter';
import CuisineFilter from '../filters/CuisineFilter';
import DeliveryFilter from '../filters/DeliveryFilter';
import ClearAllFilter from '../filters/ClearAllFilter';
import { bindActionCreators } from "redux";
const drawerWidth = 300;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  icon: {
    marginLeft: 3,
    marginRight: 7,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});


class DrawerFilter extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const { 
          classes,
          open,
          closeDrawer,
          theme,
          filterTenBis,
          filterRating,
          filterCuisine,
          filterMaxDeliveryTime,
          clearAll,
        } = this.props;
        const { minStarRating, cuisine, maxDeliveryInHours, tenbis } = this.props.store.resturants;
        return (
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={closeDrawer}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
            <ListItemText primary="Filters" />
          </div>
          <Divider />
          <List>
            <TenBisFilter filterTenBis={filterTenBis} tenbis={tenbis} />
            <RatingFilter  filterRating={filterRating} minStarRating={minStarRating} iconClass={classes.icon} />
            <CuisineFilter filterCuisine={filterCuisine} cuisine={cuisine} iconClass={classes.icon} />
            <DeliveryFilter filterMaxDeliveryTime={filterMaxDeliveryTime} maxDeliveryInHours={maxDeliveryInHours} iconClass={classes.icon} />
          </List>
          <Divider/>
          <List>
            <ClearAllFilter clearAll={clearAll} />
          </List>
        </Drawer>
        );
    }
}
const mapStateToProps = (store) => ({
  store: store,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(DrawerFilter));
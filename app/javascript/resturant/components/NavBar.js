import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { FaFilter } from 'react-icons/fa';
import ResturantSearchForm from '../forms/ResturantSearchForm';
import MenuIcon from '@material-ui/icons/Menu';
import FilterIcon from '@material-ui/icons/Filter';
import classNames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';
import * as Actions from "../actions/resturant.actions";
import { bindActionCreators } from "redux";

const drawerWidth = 300;
const styles = theme => ({
    root: {
      width: '100%',
    },
    grow: {
      flexGrow: 1,
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
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing.unit * 2,
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing.unit * 3,
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing.unit * 9,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      width: '100%',
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
      },
      hide: {
        display: 'none',
      },
    inputInput: {
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 10,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  });


const NavBar = (props) => {
    const { classes, open, openDrawer } = props;
    return(
        <div>
        <AppBar position="static" className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}>
            <Toolbar>
                <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={openDrawer}
                className={classNames(classes.menuButton, open && classes.hide)}
                >
                <FaFilter />
                </IconButton>
                <Typography variant="title" color="inherit">
                    WeEat
                </Typography>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <ResturantSearchForm debounceTimeout={350} />
            </div>
            </Toolbar>
        </AppBar>
        
        </div>
    )
}

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);

export default connect(null, mapDispatchToProps)(withStyles(styles, { withTheme: true })(NavBar));
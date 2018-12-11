import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResturantDisplay from '../../components/ResturantDisplay';
import * as Actions from '../../actions/resturant.actions';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const drawerWidth = 300;
const style = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  },
});
class Content extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchResturants();
  }

  render() {
    const { open } = this.props.resturants.resturants;
    const { classes } = this.props;
    return (
      <main
        className={classNames(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <ResturantDisplay resturants={this.props.resturants.resturants.resturants} />
      </main>
    );
  }
}
Content.propTypes = {
  classes: PropTypes.object,
  resturants: PropTypes.shape({
    resturants: PropTypes.object,
  }),
  fetchResturants: PropTypes.func,
};

const mapStateToProps = (resturants, open) => ({
  resturants: resturants,
  open: open,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style, { withTheme: true })(Content));

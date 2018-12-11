import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../../components/NavBar';
import * as Actions from '../../actions/resturant.actions';
import { bindActionCreators } from 'redux';
import DrawerFilter from '../../components/DrawerFilter';
import PropTypes from 'prop-types';

const Head = (props) => {
  const { open } = props.resturants.resturants;
  return (
    <div>
      <NavBar open={open} />
      <DrawerFilter open={open}/>
    </div>
  );
};

const mapStateToProps = (resturants, open) => ({
  resturants: resturants,
  open: open,
});
Head.propTypes = {
  resturants: PropTypes.shape({
    resturants: PropTypes.object,
  }),
};

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Head);

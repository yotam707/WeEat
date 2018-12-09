import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from '../../components/NavBar';
import * as Actions from '../../actions/resturant.actions';
import { bindActionCreators } from 'redux';
import DrawerFilter from '../../components/DrawerFilter';

class Head extends Component {
    constructor(props){
        super(props);
    }

  render() {
      const { open } = this.props.resturants.resturants;
    return (
      <div>
        <NavBar open={open} />
        <DrawerFilter open={open}/>
      </div>
    )
  }
}

const mapStateToProps = (resturants, open) => ({
  resturants: resturants,
  open: open
})

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Head)

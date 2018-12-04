import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBar from '../../components/NavBar';
import * as Actions from '../../actions/resturant.actions';
import { bindActionCreators } from 'redux';

class Head extends Component {
    constructor(props){
        super(props);
    }

  render() {
    return (
      <div>
        <NavBar />
      </div>
    )
  }
}

const mapStateToProps = (resturants) => ({
  resturants: resturants
})

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Head)

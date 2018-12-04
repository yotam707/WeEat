import React, { Component } from 'react'
import { connect } from 'react-redux'
import ResturantDisplay from '../../components/ResturantDisplay';
import * as Actions from '../../actions/resturant.actions';
import { bindActionCreators } from 'redux';

class Content extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchResturants();
    }

  render() {
    return (
      <div>
        <ResturantDisplay resturants={this.props.resturants} />
      </div>
    )
  }
}

const mapStateToProps = (resturants) => ({
  resturants: resturants
})

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Content)

import React from 'react';
import ResturantList from './ResturantsList';
import AddNewResturant from './AddNewResturant';

class ResturantDisplay extends React.Component {
  constructor () {
    super();
    // this.state = {
    //     resturants: [],
    // };
  }

  componentDidMount () {
    //this.fetchResturants();
  }

  render () {
    const resturants = this.props.resturants.resturants.resturants;
    return (
      <div>
        {/* <div className='resturant-container'>
            <ResturantFormNew/>
        </div> */}
        <div>
        {resturants &&  
          <ResturantList resturants={resturants}/>
        }
        </div>
        <AddNewResturant />
      </div>
    );
  }
}

export default ResturantDisplay;
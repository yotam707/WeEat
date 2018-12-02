import React from 'react';
import { Redirect } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';
import ResturantNavigation from './ResturantNavigation';
import ResturantText from './ResturantText';
import ResturantFooter from './ResturantFooter';
import ResturantFormNew from './ResturantFormNew';

class ResturantDisplay extends React.Component {
  constructor () {
    super();
    // this.state = {
    //     resturants: [],
    // };
  }

  fetchResturants () {
    axios.get( `api/resturant` )
        .then(response => {
          this.setState({ resturants: response.data });
        })
        .catch(error => {
          console.error(error);
        });
  }

  componentDidMount () {
    //this.fetchResturants();
  }

  render () {
    const resturants = this.props.resturants.resturants.resturants;
    return (
      <div>
        <div className='resturant-container'>
            <ResturantFormNew/>
        </div>
        <div className='resturant-container'>
        {resturants &&  
        resturants.map(r => {
            return (
                <div key={r.id}>
                    <h1>{r.name}</h1>
                    <p>{r.cuisine}</p>
                </div>
            );
        })
        }
        </div>
      </div>
    );
  }
}

export default ResturantDisplay;
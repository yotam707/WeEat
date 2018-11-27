import React from 'react';
import { Redirect } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';
import ResturantNavigation from './ResturantNavigation';
import ResturantText from './ResturantText';
import ResturantFooter from './ResturantFooter';
 
class ResturantDisplay extends React.Component {
  constructor () {
    super();
    this.state = {
        resturant: {},
        fireRedirect: false
    };
  }

  fetchResturant (id) {
    axios.get( `api/resturant/${id}` )
        .then(response => {
          this.setState({ resturant: response.data });
        })
        .catch(error => {
          console.error(error);
          this.setState({ fireRedirect: true })
        });
  }

  setResturantIdFromQueryString (qs) {
    this.resturantParams = queryString.parse(qs);
    if (this.resturantParams.resturant) {
      // assign resturant ID from the URL's query string
      this.resturantId = Number(this.resturantParams.resturant);
    } else {
      this.resturantId = this.props.startingResturantId;
      // update URL in browser to reflect current quote in query string
      this.props.history.push(`/?resturant=${this.resturantId}`);
    }
  }

  componentDidMount () {
    this.setResturantIdFromQueryString(this.props.location.search);
    this.fetchResturant(this.resturantId);
  }

  componentWillReceiveProps (nextProps) {
    this.setResturantIdFromQueryString(nextProps.location.search);
    this.fetchResturant(this.resturantId);
  }

  render () {
    const resturant = this.state.resturant
    const nextResturantId = resturant.next_id
    const previousResturant = resturant.previous_id

    return (
      <div>
        <div className='resturant-container'>
        {this.state.fireRedirect &&  
        <Redirect to={'/'} />
        }
        { previousResturant && 
            <ResturantNavigation direction='previous' otherResturantId={previousResturant} />
        }
            <ResturantText resturant={this.state.resturant} />
        { nextResturantId && 
            <ResturantNavigation direction='next' otherResturantId={nextResturantId} />
        }
        </div>

        {this.state.resturant.id !== parseInt(this.props.startingResturantId, 10) &&
        <ResturantFooter startingResturantId={this.props.startingResturantId} />
          }
      </div>
    );
  }
}

export default ResturantDisplay;
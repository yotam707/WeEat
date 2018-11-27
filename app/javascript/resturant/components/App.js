import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import ResturantDisplay from './ResturantDisplay'

const App = (props) => (
  <Router startingResturantId={props.startingResturantId}>
	<div>
	  <Route
	    path='/'
        startingResturantId={props.startingResturantId}
        render= {
            (routeProps) => 
                <ResturantDisplay {...props} {...routeProps}/>
        }
	  />
	</div>
  </Router>
)

// You will need this on the bottom of each component file
// to make it available through ES6 'import' statements.

export default App
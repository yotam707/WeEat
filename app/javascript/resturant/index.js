import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

const resturants = document.querySelector('#resturants');
console.log(resturants);
ReactDOM.render(<App startingResturantId={resturants.dataset.startingResturantId} />, resturants);

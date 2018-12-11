import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import store from './store/resturant.store';

const RootApp = () => {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  );
};

const resturants = document.querySelector('#resturants');
ReactDOM.render(<RootApp />, resturants);

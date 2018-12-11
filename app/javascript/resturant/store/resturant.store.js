import { createStore, applyMiddleware, compose } from 'redux';
import loadDataMiddleware from '../middleware/loaddata.middleware';
import thunk from 'redux-thunk';
import resturantRedcer from '../reducers/resturant.reducers';
// eslint-disable-next-line no-underscore-dangle
const enhance = window.____REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  resturantRedcer, enhance(
    applyMiddleware(loadDataMiddleware),
    applyMiddleware(thunk)));
export default store;

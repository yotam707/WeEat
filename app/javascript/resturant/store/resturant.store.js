import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import resturantRedcer from '../reducers/resturant.reducers';
const enhance = window.____REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(resturantRedcer,enhance(applyMiddleware(thunk)));
export default store;